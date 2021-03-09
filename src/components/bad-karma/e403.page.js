import React from 'react'
import {E403_ROUTE} from '../routing/constants'
import ErrorLayout from './error-layout'

const E403 = () => <ErrorLayout eno="403" oops />

E403.route = {
    path: E403_ROUTE,
    strings: 'error',
    category: 'Errors',
    listable: false,
    navigable: true
}

export default E403