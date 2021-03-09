import React from 'react'
import {ca, iconSize} from '../../globals/helpers'

const baseCss = ca('fill-current')

const SuccessIcon = ({size, className}) =>
    <svg className={baseCss(className, iconSize(size))}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
        <path d="M12,23.8C5.6,23.8,0.2,18.4,0.2,12S5.6,0.2,12,0.2S23.8,5.5,23.8,12C23.8,18.4,18.4,23.8,12,23.8z M12,3.1
	c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9s8.9-4,8.9-8.9S16.9,3.1,12,3.1z"/>
        <path d="M11,19.1c-0.5,0-0.9-0.2-1.2-0.6l-4.1-5.1c-0.5-0.6-0.4-1.6,0.2-2.1c0.6-0.5,1.6-0.4,2.1,0.2l2.7,3.3L15,6.6
	c0.4-0.7,1.3-1,2-0.6c0.7,0.4,1,1.3,0.6,2l-5.3,10.3c-0.2,0.5-0.7,0.8-1.2,0.8C11.1,19.1,11,19.1,11,19.1z"/>
    </svg>

export default SuccessIcon
