import React from 'react'
import {Link} from 'react-router-dom'
import DialogWindow from '../../__base__/dialogs/dialog-window'
import LoginForm from './login.form'
import {LOGIN_ROUTE} from '../../routing/constants'


const Login = () => {
    return <>
    <DialogWindow title='Login'>
            <LoginForm/>
            <div className="-mt-6">
                <Link to={'/forgot-password'} className="hover:text-secondary">
                    Forgot Password
                </Link>
            </div>
        </DialogWindow>

        </>
}


// Route data
Login.route = {
    path: '/login',
    auth: LOGIN_ROUTE,
    strings: 'login',
    legacy: true,
    category: 'Auth',
    listable: false,
    navigable: true
}

export default Login
