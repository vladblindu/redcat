import React from 'react'
import {SIZES} from './constants'

export const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    })
}

export const iconSize = s => {
    return `w-${SIZES[s] || '6'} h-${SIZES[s] || '6'} `
}

export const ca = baseClass => function () {
    if (!arguments.length) return baseClass || ''
    const endClass = Array.prototype
        .slice
        .call(arguments)
        .join(' ')
        .replace(/\s\s+/g, ' ')
    if (!endClass || endClass === ' ') return baseClass || ''
    return baseClass.concat(baseClass ? ' ' : '', endClass)
}

export const isEmpty = (o) => !Object.keys(o).length