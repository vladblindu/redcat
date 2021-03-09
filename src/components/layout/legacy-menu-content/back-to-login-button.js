import React from 'react'
import {useHistory} from 'react-router'
import {LOGIN_ROUTE} from '../../routing/constants'

const BackToLoginButton = ({close}) => {
    const {push} = useHistory()
    const redirect = () => {
        close()
        push(LOGIN_ROUTE)
    }

    return <button
        className="mb-8 w-full px-4 py-2 flex justify-center items-center hover:bg-primary-hover text-center rounded-lg border-2 border-primary-hover"
        onClick={redirect}>
        <div className="ml-4 text-xl">Back to LOGIN</div>
    </button>
}

export default BackToLoginButton