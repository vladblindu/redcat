import React from 'react'
import PropTypes from 'prop-types'
import {iconSize, ca} from '../../globals/helpers'

const Calendar = ({size, className, dark, ...rest}) => {

    const baseClass = ca(`fill-current ${iconSize(size)}`)
    return <svg
        {...rest}
        className={baseClass(className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M19,3.5h-2.5V2h-1v1.5h-7V2h-1v1.5H5C3.6,3.5,2.5,4.6,2.5,6v14c0,1.4,1.1,2.5,2.5,2.5h14c1.4,0,2.5-1.1,2.5-2.5V6
	C21.5,4.6,20.4,3.5,19,3.5z M5,4.5h2.5V6h1V4.5h7V6h1V4.5H19c0.8,0,1.5,0.7,1.5,1.5v3.5h-17V6C3.5,5.2,4.2,4.5,5,4.5z M19,21.5H5
	c-0.8,0-1.5-0.7-1.5-1.5v-9.5h17V20C20.5,20.8,19.8,21.5,19,21.5z"/>
        <path d="M8.6,14.7H6.3v-2.3h2.3V14.7z"/>
        <path d="M13.1,14.7h-2.3v-2.3h2.3V14.7z"/>
        <path d="M17.7,14.7h-2.3v-2.3h2.3V14.7z"/>
        <path d="M8.6,18.6H6.3v-2.3h2.3V18.6z"/>
        <path d="M13.1,18.6h-2.3v-2.3h2.3V18.6z"/>
        <path d="M17.7,18.6h-2.3v-2.3h2.3V18.6z"/>
    </svg>
}


Calendar.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string
}

Calendar.displayName = 'Calendar'

export default Calendar