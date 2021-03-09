import React from 'react'
import {GQL, useHttp} from '../lib/http'
import {initialize, normalizeData} from './helpers'

/**
 * @param {object} shape
 * @param {string} name
 * @returns {<Promise{object}> | {object}}
 */
const useInitialValues = (shape, name) => {

    const http = useHttp(GQL)

    const [initialValues, setInitiaalValues] = React.useState(initialize(shape))

    const query = name && `query={${name}}`

    React.useEffect(
        () => {
            if (name && shape['$asyncInit']) http(query)
                .then(
                    res => setInitiaalValues(
                        normalizeData(res.data, shape)
                    ))
        }, [http, setInitiaalValues, shape, query, name])
    return initialValues
}

export default useInitialValues