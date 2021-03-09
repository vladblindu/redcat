import React from 'react'
import {HTTP, useHttp} from '../http'
import {TOKEN_KEY, USER_KEY} from './constants'
import {isEmpty} from '../../globals/helpers'
import {LOGIN_ROUTE} from '../../components/routing/constants'
import {useHistory} from 'react-router'
import authConfig from '../../config/auth.config'
import checkOldAuth from './check-old-auth'
import {clearLocalStorage, populateLocalStorage} from './helpers'

/**
 * @typedef {object} opts
 * @param {function} opts.http
 * @param {string?} opts.tokenKey
 * @param {function} opts.loginRedirect
 * @param {string?} opts.loginEndpoint
 * @param {string?} opts.registerEndpoint
 * @param {boolean} opts.registerEnabled
 * @param {string?} jwt  - if a valid localstorage session has been found
 * @param {object?} user - if a na authenticated call has been made - see above
 */

export const AuthContext = React.createContext({})

export const AuthProvider = ({config, children}) => {
    const {
        tokenKey = TOKEN_KEY,
        userKey = USER_KEY,
        loginEndpoint,
        registerEnabled,
        registerEndpoint
    } = (config && !isEmpty(config)) || authConfig

    const user = localStorage.getItem(userKey)
    const token = localStorage.getItem(tokenKey)

    const [isAuth, setIsAuth] = React.useState(token && user)
    const http = useHttp(HTTP)
    const {push} = useHistory()

    const setAuthData = (payload) => {
        populateLocalStorage(payload, tokenKey, userKey)
        setIsAuth(true)
    }

    const login = async (identifier, password) => {
        clearLocalStorage(tokenKey, userKey)
        setIsAuth(false)
        const authData = await http(loginEndpoint, {
            identifier,
            password
        })
        if (authData.error) return authData

    }

    const register = async (registerData) => {
        const regData = await http(registerEndpoint, registerData)
        if (regData.error) return regData
        if (!regData.error && registerEnabled && regData.jwt && regData.user)
            setAuthData(regData)
        return regData
    }

    const logout = () => {
        clearLocalStorage(tokenKey, userKey)
        setIsAuth(false)
        if (push) push(LOGIN_ROUTE)
    }

    const context = {
        login,
        logout,
        register,
        user: isAuth && JSON.parse(localStorage.getItem(userKey)),
        isAuth
    }

    return <AuthContext.Provider value={context}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context || isEmpty(context))
        throw new Error('DEVERR: No available Auth context in useAuth hook.')
    return context
}

export {checkOldAuth}