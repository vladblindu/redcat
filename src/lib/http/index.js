import React from 'react'
import {execCall, FetchError, setHttpAgent, setParams} from './helpers'
import {IS_DEFAULT, IS_GQL, IS_ORIGIN} from './constants'
import {useHistory} from 'react-router-dom'

export {IS_DEFAULT, IS_GQL, IS_ORIGIN, ORIGIN, GQL, HTTP, DEFAULT_HTTP_METHOD} from './constants'

const hasContent = o => !!Object.keys(o).length

/**
 * @param config
 * @returns {function(*)}
 */
const redirector = config => res => {
    if (res.ok || !(config.redirect && config.errorPages && hasContent(config.errorPages)))
        return res
    res.redirected = true
    config.redirect(config.errorPages[res.status] || config.errorPages.default || '/509')
    return res
}

/**
 * @name originHttpCall
 * @description specific get files from public origin
 * @param {config} config
 * @returns {function({string}): <Promise{object}>}
 */
export const graphqlCall = config =>
    query => {
        const callParams = setParams(config)[IS_GQL]
        return execCall(
            setHttpAgent(config) || FetchError(),
            callParams(query)
        ).then(redirector(config))
    }

/**
 * @name originHttpCall
 * @description specific get files from public origin
 * @param {config} config
 * @returns {function({string}): <Promise>}
 */
export const originHttpCall = (config) => (url) => {
    const callParams = setParams(config)[IS_ORIGIN]
    return execCall(
        setHttpAgent(config) || FetchError(),
        callParams(url)
    ).then(redirector(config))
}

/**
 * @name httpCall
 * @description makes a http call
 * @param {config} config
 * @returns {function({string}, {object?}, {string?}, {string?}): <Promise{object}>}
 */
export const httpCall = (config) =>
    (endpointName, payload, method, param) => {
        const callParams = setParams(config)[IS_DEFAULT]
        return execCall(
            setHttpAgent(config) || FetchError(),
            callParams(endpointName, payload, method, param)
        ).then(redirector(config))
    }

const HttpContext = React.createContext({})

export const HttpProvider = ({config, children}) => {

    // handle redirection if a BrowserRouter HOC is available
    const history = useHistory()
    if (history) config.redirect = history.push
    else console.log('HOC ERROR: history is undefined. Self redirection disabled')

    const value = {
        gql: graphqlCall(config),
        http: httpCall(config),
        origin: originHttpCall(config)
    }

    return <HttpContext.Provider value={value}>
        {children}
    </HttpContext.Provider>
}

export const useHttp = callType => {
    const context = React.useContext(HttpContext)
    if (!context || !hasContent(context))
        throw new Error('DEVERR: No HOC context available for useHttp hook.')
    const http = context[callType.toLowerCase().trim()]
    if (!http) throw new Error('DEVERR: Wrong callType argument provided to useHttp hook.')
    return http
}

