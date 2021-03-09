import React from 'react'
import RegistrationNavMenu from './registration-nav-menu'
import {LOGIN_ROUTE} from '../../routing/constants'
import BackToLoginButton from './back-to-login-button'
import SupportButton from '../support-button'
import {useLocation} from 'react-router'

const LegacyContent = ({close}) => {

    const location = useLocation()

    return <div className="h-full flex flex-col justify-between items-center">
        <RegistrationNavMenu close={close}/>
        <div className="w-full">
            {
                location.pathname !== LOGIN_ROUTE &&
                <BackToLoginButton close={close}/>
            }
            <SupportButton close={close}/>
        </div>
    </div>
}

export default LegacyContent