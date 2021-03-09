import React from 'react'
import PropTypes from 'prop-types'
import {ca, iconSize} from '../../globals/helpers'
import {DOWN, rotationDirection, MD} from '../../globals/constants'

const Chevron = ({size, className, direction, ...rest}) => {

    const baseClass = ca(`fill-current ${iconSize(size)} ${rotationDirection[direction]}`)
    return <svg
        {...rest}
        className={baseClass(className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <polyline points="6 9 12 15 18 9" />
    </svg>
}

Chevron.displayName = 'Chevron'

Chevron.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string
}

Chevron.defaultProps = {
    direction: DOWN,
    size: MD
}

export default Chevron