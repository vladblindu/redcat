import {NOTIFICATION_PREFIX} from './constants'

export const isNotification = code =>
    code.toString()[0] === NOTIFICATION_PREFIX