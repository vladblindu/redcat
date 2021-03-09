import React from 'react'
import {NOTIFICATION_TIME} from './constants'
import Notifications from './notification'
import {isNotification} from './helpers'

const StatusContext = React.createContext({})

export const StatusProvider = ({children}) => {

    const [status, setStatus] = React.useState({
        opened: false,
        code: 0,
        message: ''
    })

    const close = () => {
        setStatus({...status, opened: false})
    }

    const open = () => {
        setStatus({...status, opened: true})
    }

    const isTimed = isNotification(status.code) && status.opened

    React.useEffect(
        () => {
            if (isTimed) {
                const timer = setTimeout(() => {
                    if (status.opened) close()
                }, NOTIFICATION_TIME)
                return () => clearTimeout(timer)
            }
        }
    )

    const context = {
        open,
        close,
        ...status,
        setStatus: (code, message) => {
            setStatus({opened: true, code, message})
        }
    }

    return <StatusContext.Provider value={context}>
        <Notifications/>
        {children}
    </StatusContext.Provider>
}

export const useStatus = () => React.useContext(StatusContext)