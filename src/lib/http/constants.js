/**
 * @type {object} config
 * @param {object} config
 * @param {function?} config.httpAgent
 * @param {function?} config.token
 * @param {string?} config.tokenKey
 * @param {string} config.baseUrl
 * @param.{object} config.endpoints
 * @param {object} config.endpoints.gqlEndpoint
 * @param {object?} config.baseHeaders,
 * @param {function} config.redirect
 * @param {object} config.errorPages
 */

export const TOKEN_KEY = 'token'
export const ORIGIN_URL = 'origin:/'
export const POST = 'POST'
const DEFAULT_GQL_METHOD = POST
const DEFAULT_GQL_ENDPOINT_URL = '/graphql'
export const DEFAULT_HTTP_METHOD = 'GET'
export const GET = 'GET'

export const DEFAULT_GQL_ENDPOINT = {
  gqlMethod: DEFAULT_GQL_METHOD,
  url: DEFAULT_GQL_ENDPOINT_URL,
  headers: { 'Accept-Encoding': 'gzip' }
}

export const IS_GQL = 2
export const IS_ORIGIN = 1
export const IS_DEFAULT = 0
export const GQL = 'gql'
export const HTTP = 'http'
export const ORIGIN = 'origin'
