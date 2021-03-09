import React from 'react'
import PropTypes from 'prop-types'
import Close from '../../svg/close'

const RemoveItem = ({remove}) =>
    <div className="w-4 h-4 bg-paper-hover p-px rounded-full text-primary"
         onClick={remove}>
        <Close size="xsm" className="mx-auto mt-1"/>
    </div>

RemoveItem.propTypes = {
    remove: PropTypes.func.isRequired,
}

export default RemoveItem