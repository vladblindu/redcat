import cn from 'classnames'
import Arrow from '../../svg/arrow'
import PropTypes from 'prop-types'
import React from 'react'

const SubmitButton = ({disabled, label}) =>
    <button
        className={cn('flex px-4 py-2 bg-primary rounded-lg text-ink-inverted cursor-pointer',
            {
                'opacity-50': disabled,
                'hover:bg-primary-hover': !disabled
            })}
        disabled={disabled}
        type="submit">
        <Arrow direction="left"/>
        <div className="text-xl ml-2">{label}</div>
    </button>


SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string
}

export default SubmitButton