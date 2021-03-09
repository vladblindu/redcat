import React from 'react'
import {useHistory} from 'react-router-dom'
import {useStrings} from '../../../lib/strings'
import appCfg from '../../../config/app.config'
import {capitalize} from '../../../lib/utils'
import {REGISTER_ROUTE} from '../../routing/constants'

const RegistrationNavMenu = ({close}) => {

    const {cap, tpl} = useStrings('register')
    const {push} = useHistory()


    return <div className="w-full mt-2">
        <div className="text-xl font-bold px-4 py-2">{cap('registration-request')}</div>
        {appCfg.accountTypes
            .map(accountType => <div
                    onClick={() => {
                        close()
                        push(`${REGISTER_ROUTE}/${accountType}`)
                    }}
                    className="px-4 py-2 hover:bg-primary-hover rounded-lg cursor-pointer border-2 border-primary-hover mb-2"
                    key={accountType}>
                    {
                        capitalize(tpl('account-registration-request', {accountType: cap(accountType + '/g')}))
                    }
                </div>
            )}
    </div>
}

export default RegistrationNavMenu