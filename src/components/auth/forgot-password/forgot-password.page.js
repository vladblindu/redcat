import React from 'react'
import Page from '../../layout/page.layout'
import ForgotPasswordForm from './forgot-password-form'

const ForgotPasswordPage = () => {
    return <Page title='Forgot password' subtitle='Forgot password subtitle'>
        <p className="my-8 text-justify">Forgot Password instructions</p>
        <ForgotPasswordForm/>
    </Page>
}



// Route data
ForgotPasswordPage.route = {
    path: '/forgot-password',
    legacy: true,
    category: 'Auth',
    listable: false,
    navigable: true
}

export default ForgotPasswordPage
