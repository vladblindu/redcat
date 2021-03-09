import React from 'react'
import Arrow from "../../svg/arrow"
import PropTypes from 'prop-types'
import {ca} from '../../../globals/helpers'
import cn from 'classnames'
import {LG} from '../../../globals/constants'

const baseCss = ca('fill-current right-0 cursor-pointer disabled:opacity-75')

const ArrowButton = ({size, className, disabled, direction, ...rest}) =>
    <button disabled={disabled} {...rest}>
        <Arrow className={cn(
            baseCss(className), {
                'opacity-50': disabled
            })}
               size={size}
               direction={direction}/>
    </button>

ArrowButton.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
    direction: PropTypes.string,
    disable: PropTypes.bool
}

ArrowButton.defaultProps = {
    size: LG,
    disabled: false
}

export default ArrowButton