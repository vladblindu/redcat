import {BrowserRouter} from 'react-router-dom'
import ErrorBoundary from '../bad-karma/error-boundary'
import React from 'react'

const AppRouter = ({children}) =>
    <BrowserRouter>
        <ErrorBoundary>
            {children}
        </ErrorBoundary>
    </BrowserRouter>

export default AppRouter