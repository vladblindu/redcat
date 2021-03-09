import React from 'react'
import {Redirect, Switch} from 'react-router-dom'
import {routes, routingData} from './helpers'
import {AppLayout, LegacyLayout} from '../layout'
import AppRouter from './router'
import {LOGIN_ROUTE} from './constants'
import {useAuth} from '../../lib/auth'

const NoAuthRouting = () => {
    return <LegacyLayout>
        <Switch>
            {routes(routingData, rt => rt.legacy || (rt.category === 'Errors'))}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    </LegacyLayout>
}

const AuthRouting = ({home}) => {
    return <AppLayout>
        <Switch>
            {routes(routingData, rt => rt, home)}
        </Switch>
    </AppLayout>
}

const Routing = () => {

    const {isAuth, user} = useAuth()

    return isAuth ? <AuthRouting home={user.home}/>
        : <NoAuthRouting/>
}

export {AppRouter, Routing}
