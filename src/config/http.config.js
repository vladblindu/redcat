import {authEndpoints} from './auth.config'
import {errorPages} from './errors.config'
import {GET} from '../lib/http/constants'

const httpConfig = {
    endpoints: {
        gqlEndpoint: {},
        ...authEndpoints,
        contact:{
            method: GET,
            headers: {
                'contentType': 'application/json'
            }
        }
    },
    errorPages,
    baseUrl: "http://localhost:3003",
    baseHeaders: {
        "x-api-key": "dummy-api-key"
    }
}

export default httpConfig