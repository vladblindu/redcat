import React from 'react'
import {E500_ROUTE} from '../routing/constants'
import ErrorLayout from './error-layout'

const E500 = () => <ErrorLayout eno="500" oops />

E500.route = {
    path: E500_ROUTE,
    strings: 'error',
    category: 'Errors',
    listable: false,
    navigable: true
}

export default E500