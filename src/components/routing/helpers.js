import React from 'react'
import * as pages from '../pages'
import {Route} from 'react-router-dom'
import {HOME_ROUTE} from './constants'

export const routes = (routingData, filter, home) => {
    return Object.values(routingData)
        .filter(filter)
        .map(route => <Route
            key={route.path}
            path={
                home && home === route.path
                    ? HOME_ROUTE
                    : route.path + (route.params ? `/:${route.params}` : '')
            }
            render={() => <route.component/>}/>)
}

export const routingData = Object.keys(pages).reduce((acc, k) => {
    const rt = pages[k].route
    if (!rt.path)
        throw new Error('DEVERR: Undefined route parameters on route component.')
    acc[k] = {
        component: pages[k],
        ...rt
    }
    return acc
}, {})