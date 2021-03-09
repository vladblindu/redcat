import React from 'react'
import {E404_ROUTE} from '../routing/constants'
import ErrorLayout from './error-layout'

const E404 = () => <ErrorLayout eno="404" oops />

E404.route = {
    path: E404_ROUTE,
    strings: 'error',
    category: 'Errors',
    listable: false,
    navigable: true
}

export default E404