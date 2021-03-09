import React from 'react'
import PropTypes from 'prop-types'
import {ca, iconSize} from '../../globals/helpers'
import {SM} from '../../globals/constants'

const CaretDown = ({size, className}) => {
    const baseClass = ca(`${iconSize(size)} fill-current mr-0`)
    return <svg className={baseClass(className)}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="6 6 12 12">
        <path d="M7 10l5 5 5-5z"/>
    </svg>
}

CaretDown.defaultProps = {
    size: SM
}

CaretDown.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string
}

export default CaretDown