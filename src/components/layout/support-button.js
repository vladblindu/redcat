import React from 'react'
import {useHistory} from 'react-router'
import Help from '../svg/help'
import {CONTACT_ROUTE} from '../routing/constants'

const SupportButton = ({close}) => {
    const {push} = useHistory()
    const redirect = () => {
        close()
        push(CONTACT_ROUTE)
    }

    return <button
        className="mb-8 w-full px-4 py-2 flex justify-center items-center hover:bg-primary-hover text-center rounded-lg border-2 border-primary-hover"
        onClick={redirect}>
        <Help/>
        <div className="ml-4 text-xl">CONTACT SUPPORT</div>
    </button>
}

export default SupportButton