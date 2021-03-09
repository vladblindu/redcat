const LOGIN_ENDPOINT = 'login'
const REGISTER_ENDPOINT = 'register'
const REFRESH_ENDPOINT = 'refresh'

export const authEndpoints = {
  [LOGIN_ENDPOINT]: {
    url: "auth/login",
    method: "post",
    headers: {"content-type":  "application/json"}
  },
  [REGISTER_ENDPOINT]: {
    url: "auth/registration",
    method: "post",
    headers: {"content-type":  "application/json"}
  },
  [REFRESH_ENDPOINT]: {
    url: "auth/refresh",
    method: "get",
    auth: true
  }
}

export default {
  loginEndpoint: LOGIN_ENDPOINT,
  registerEndpoint: REGISTER_ENDPOINT,
  refreshEndpoint: REFRESH_ENDPOINT,
  registerEnabled: true
}