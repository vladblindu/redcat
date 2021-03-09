import React from 'react'
import PropTypes from 'prop-types'
import Close from '../../svg/close'

const WindowClose = ({close, size}) =>
    <div className="hover:bg-primary-hover p-2 rounded-lg"
        onClick={close}>
        <Close size={size}/>
    </div>

WindowClose.propTypes = {
    close: PropTypes.func.isRequired,
}

export default WindowClose