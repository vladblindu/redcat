import React from 'react'
import {ca, iconSize} from '../../globals/helpers'

const baseCss = ca('fill-current')

const WarningIcon = ({size, className}) =>
    <svg className={baseCss(className, iconSize(size))}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
        <path d="M12,23.7C5.6,23.7,0.3,18.4,0.3,12S5.6,0.3,12,0.3S23.7,5.5,23.7,12C23.7,18.4,18.4,23.7,12,23.7z M12,2.3
	c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.3,12,2.3z"/>
        <circle cx="12" cy="18.8" r="1.5"/>
        <path d="M12,16.6c-0.8,0-1.5-0.7-1.5-1.5V4.8c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v10.3C13.5,15.9,12.8,16.6,12,16.6z"/>
    </svg>

export default WarningIcon
