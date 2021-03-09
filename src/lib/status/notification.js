import React from 'react'
import cn from 'classnames'
import {STATUSES} from './constants'
import Close from '../../components/svg/close'
import {useStatus} from './index'
import NotificationIcon from './notification-icon'

const Notifications = () => {

    const {opened, close, code, message} = useStatus()

    return <div
        className={cn(
            'flex justify-between fixed z-50 w-full md:w-1/2 md:mx-1/4 h-48 ',
            'rounded-b-xl text-paper p-2 slide-up',
            `bg-${STATUSES[code]}`,
            {
                'top-0': opened,
                'top-out-48': !opened
            }
        )}>
        <div className="flex-1 flex flex-col">
            <div
                className="w-full flex justify-start md:justify-end"
                onClick={close}>
                <Close size="sm" className="mb-2  cursor-pointer"/>
            </div>
            <div
                className={`flex-1 flex text-${STATUSES[code]} items-center w-full h-full bg-paper rounded-b-lg box-content`}>
                <div className="p-8">
                    <NotificationIcon code={code}/>
                </div>
                <div className="text-xl font-bold text-large">{(`${STATUSES[code] || 'error'}/g`)}:</div>
                <p className="p-8">{message}</p>
            </div>
        </div>
    </div>
}

export default Notifications
