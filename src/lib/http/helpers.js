import {DEFAULT_GQL_ENDPOINT, DEFAULT_HTTP_METHOD, GET, ORIGIN_URL, TOKEN_KEY} from './constants'
import urlJoin from 'url-join'
import {isEmpty} from '../../globals/helpers'

/**
 *
 * @param {object} params
 * @returns {string}
 */
const encodeGetParams = params =>
    Object.entries(params).map(kv => kv.map(encodeURIComponent).join('=')).join('&')

export const FetchError = () => {
    throw new Error('No fetch available and no other http agent provided. Fatal error.')
}

/**
 * @param {config} config
 * @param {function} config.httpAgent
 * @returns {*}
 */
export const setHttpAgent = (config) =>
    config.httpAgent && typeof config.httpAgent === 'function'
        ? config.httpAgent
        : window.fetch

/**
 * @param {object} headers
 * @returns {boolean}
 */
export const checkReturnsJson = (headers) =>
    !!Object.values(headers).filter((v) => v.toLowerCase() === 'application/json')
        .length

/**
 * @param {config} config
 * @param {function?} config.token
 * @param {string?} config.tokenKey
 * @returns {*}
 */
export const authHeader = (config) => ({
    Authorization: config.token
        ? config.token()
        : 'Bearer ' + localStorage.getItem(config.tokenKey || TOKEN_KEY)
})

/**
 * @param {function} http
 * @param {object} params
 * @param {object} params.headers
 */
export const execCall = (http, {url, headers, ...rest}) =>
    checkReturnsJson(headers)
        ? http(url, {headers, ...rest})
            .then((res) => res.ok ? res.json() : res)
            .catch(e => {
                console.log(e)
                const tmp = {ok: false, error: true}
                if (e.toString() === 'TypeError: Failed to fetch')
                    tmp.status = 503
                else tmp.status = 509
                return tmp
            })
        : http(url, {headers, ...rest})
            .catch(e => {
                const tmp = {ok: false, error: true}
                if (e.toString() === 'TypeError: Failed to fetch')
                    tmp.status = 503
                else tmp.status = 509
                return Promise.resolve(tmp)
            })

/**
 * @param {config} config
 * @param {object} config.endpoints.gqlEndpoint
 * @param {object?} config.baseHeaders
 * @param {string} config.baseUrl
 * @returns {[
 * function(url: string, payload:{}, method: string, param: string): {headers: {}, method: *, body: string, url: string},
 * function(url: string): {headers: {}, method: string, body: string | null, url: string},
 * function(url: string): {headers: {}, method: string, body: string, url: string}
 * ]}
 */
export const setParams = config => {
    if (!config.baseUrl)
        throw new Error('DEVERR: No __base__ url found in http.config.')
    config.endpoints.gqlEndpoint = {
        ...DEFAULT_GQL_ENDPOINT,
        ...config.endpoints.gqlEndpoint
    }
    // set the app's origin url
    const webOrigin = window.location.protocol + '//' + window.location.host

    return [
        // index 0 - defaultCall
        (endpointName, _payload, _method, _params = '') => {

            const endpoint = config.endpoints[endpointName] || {}
            const method = _method || (endpoint && endpoint.method) || DEFAULT_HTTP_METHOD

            let params
            if (method === GET) {
                if (!isEmpty(_payload))
                    params = encodeGetParams(_payload)
            } else if (_params) {
                if (typeof _params === 'object')
                    params = encodeGetParams(_params)
                else {
                    if (_params[0] !== '?') params = '?' + _params
                    else params = _params
                }
            } else params = ''

            const headers = {
                ...(config.baseHeaders || {}),
                ...(endpoint.auth ? authHeader(config) : {}),
                ...(endpoint.headers || {})
            }

            const url = urlJoin(
                config.baseUrl,
                endpoint.url || '/' + endpointName,
                params
            )

            const tmp = {
                url,
                headers,
                method
            }

            if (method !== GET) tmp.body = JSON.stringify(_payload)
            return tmp
        }
        ,
        // index 1 - originCall
        (url) => ({
            url: urlJoin(webOrigin, url.replace(ORIGIN_URL, '')),
            method: GET,
            headers: {
                ...(config.baseHeaders || {})
            },
            body: null
        }),
        // index 2  - gqlCall
        (url) => ({
            url: urlJoin(config.baseUrl, config.endpoints.gqlEndpoint.url),
            method: config.endpoints.gqlEndpoint.gqlMethod,
            body: url,
            headers: {
                ...(config.baseHeaders || {}),
                ...(config.endpoints.gqlEndpoint.auth === false ? {} : authHeader(config)),
                ...(config.endpoints.gqlEndpoint.headers || {})
            }
        })
    ]
}
