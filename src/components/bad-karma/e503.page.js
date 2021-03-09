import React from 'react'
import {E503_ROUTE} from '../routing/constants'
import ErrorLayout from './error-layout'

const E503 = () => <ErrorLayout eno="503" oops />

E503.route = {
    path: E503_ROUTE,
    strings: 'error',
    category: 'Errors',
    listable: false,
    navigable: true
}

export default E503