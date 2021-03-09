import {TOKEN_KEY, USER_KEY} from './constants'
import authConfig from '../../config/auth.config'
import httpConfig from '../../config/http.config'
import validationSchema from './user.validation'
import {clearLocalStorage, populateLocalStorage} from './helpers'
import {httpCall} from '../http'
import {devAuthData} from '../../config/dev.config'

const checkOldAuth = () => {

    const {
        tokenKey = TOKEN_KEY,
        userKey = USER_KEY
    } = authConfig
    //dev-code-in
    if (process.env.REACT_APP_DEV_FORCE_LOGIN === 'enabled') {
        populateLocalStorage(devAuthData, tokenKey, userKey)
        return Promise.resolve()
    }
    //dev-code-out

    const user = localStorage.getItem(userKey)
    const token = localStorage.getItem(tokenKey)
    const refreshEndpoint = authConfig.refreshEndpoint
    if (!token || !user) {
        clearLocalStorage(tokenKey, userKey)
        return Promise.resolve()
    }
    try {
        validationSchema.isValidSync(JSON.parse(user))
    } catch (e) {
        clearLocalStorage(tokenKey, userKey)
        return Promise.resolve()
    }

    const http = httpCall(httpConfig)
    return http(refreshEndpoint)
        .then(res => {
            if (!res.ok) throw new Error(res.status)
            if (!res.json) {
                console.log(res.status)
                throw new Error(res.status)
            }
            return res.json()

        })
        .then(res => {
            if (res) {
                populateLocalStorage(res, tokenKey, userKey)
                return Promise.resolve()
            }
            clearLocalStorage(res.jwt, res.user)
            return Promise.resolve()
        })
        .catch(e => {
            const err = e.toString().replace(/\D/g,'')
            clearLocalStorage(tokenKey, userKey)
            if (!isNaN(parseInt(err))) return Promise.reject(err)
            return Promise.reject('fatal')
        })
}


export default checkOldAuth