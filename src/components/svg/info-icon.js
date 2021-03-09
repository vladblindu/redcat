import React from 'react'
import {ca, iconSize} from '../../globals/helpers'

const baseCss = ca('fill-current')

const InfoIcon = ({size, className}) =>
    <svg className={baseCss(className, iconSize(size))}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
        <path d="M12,23.7C5.6,23.7,0.3,18.4,0.3,12S5.6,0.3,12,0.3S23.7,5.5,23.7,12C23.7,18.4,18.4,23.7,12,23.7z M12,2.3
	c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.3,12,2.3z"/>
        <polygon points="12.5,9.2 13.7,9.2 13.7,18.2 14,18.5 15.2,18.6 15.2,19.7 8.8,19.7 8.8,18.6 10,18.5 10.2,18.2 10.2,11.4 8.9,11.4
	8.9,10.4 "/>
        <path d="M10.1,6.3c0-0.6,0.2-1,0.5-1.4C11,4.5,11.4,4.3,12,4.3c0.5,0,1,0.2,1.4,0.5c0.4,0.4,0.5,0.8,0.5,1.3c0,0.6-0.2,1.1-0.6,1.4
	C13,8,12.5,8.2,12,8.2c-0.5,0-1-0.2-1.3-0.5C10.3,7.3,10.1,6.8,10.1,6.3z"/>
    </svg>

export default InfoIcon
