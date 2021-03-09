import React from 'react'
import {ca, iconSize} from '../../globals/helpers'

const baseCss = ca('fill-current')

const ErrorIcon = ({size, className}) =>
    <svg className={baseCss(className, iconSize(size))}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
        <path d="M12,23.8C5.6,23.8,0.2,18.4,0.2,12S5.6,0.2,12,0.2S23.8,5.5,23.8,12C23.8,18.4,18.4,23.8,12,23.8z M12,3.1
	c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9s8.9-4,8.9-8.9S16.9,3.1,12,3.1z"/>
        <path d="M17.7,15.7L13.9,12l3.7-3.7c0.5-0.5,0.5-1.4,0-1.9s-1.4-0.5-1.9,0L12,10.1L8.3,6.3c-0.5-0.5-1.4-0.5-1.9,0s-0.5,1.4,0,1.9
	l3.7,3.7l-3.7,3.7c-0.5,0.5-0.5,1.4,0,1.9s1.4,0.5,1.9,0l3.7-3.7l3.7,3.7c0.5,0.5,1.4,0.5,1.9,0S18.2,16.3,17.7,15.7z"/>
    </svg>

export default ErrorIcon
