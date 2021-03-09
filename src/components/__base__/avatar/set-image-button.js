import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const SetImageButton = ({disabled, action}) =>
    <button
        className={cn('bg-primary text-ink-inverted px-4 py-2 rounded-lg opacity-1 disabled:opacity-75',
            {
                'opacity-50': disabled,
                'hover:bg-primary-hover': !disabled
            })}
        onClick={action}
        disabled={disabled}
        type="button">
        SET
    </button>


SetImageButton.propTypes = {
    disabled: PropTypes.bool,
    action: PropTypes.func.isRequired,
}

export default SetImageButton