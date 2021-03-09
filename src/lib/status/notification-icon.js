import React from 'react'
import PropTypes from 'prop-types'
import {INFO_NOTIFICATION, SUCCESS_NOTIFICATION, WARNING_NOTIFICATION} from './constants'
import SuccessIcon from '../../components/svg/success-icon'
import ErrorIcon from '../../components/svg/error-icon'
import WarningIcon from '../../components/svg/warning-icon'
import InfoIcon from '../../components/svg/info-icon'

const NotificationIcon = ({code}) => {
    switch (code) {
        case SUCCESS_NOTIFICATION:
            return <SuccessIcon size="lg"/>
        case WARNING_NOTIFICATION:
            return <WarningIcon size="lg"/>
        case INFO_NOTIFICATION:
            return <InfoIcon size="lg"/>
        default:
            return <ErrorIcon size="lg"/>
    }
}

NotificationIcon.propTypes = {
    code: PropTypes.number
}

export default NotificationIcon