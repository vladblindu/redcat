import React from 'react'
import {E509_ROUTE} from '../routing/constants'
import ErrorLayout from './error-layout'

const EFatal = () => <ErrorLayout eno="fatal" oops />

EFatal.route = {
    path: E509_ROUTE,
    strings: 'error',
    category: 'Errors',
    listable: false,
    navigable: true
}

export default EFatal