import React from 'react'
import PropTypes from 'prop-types'
import {ca, iconSize} from "../../globals/helpers";


const Add = ({size, className, cnCircle}) => {
    const baseClass = ca(`fill-current ${iconSize(size)}`)

    return <svg className={baseClass(className)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
        <path d="M18.1,11H13V5.9c0-0.6-0.4-1-1-1s-1,0.4-1,1V11H5.9c-0.6,0-1,0.4-1,1s0.4,1,1,1H11v5.1c0,0.6,0.4,1,1,1s1-0.4,1-1V13h5.1
	c0.6,0,1-0.4,1-1S18.6,11,18.1,11z"/>
        {!cnCircle && <path d="M12,23.7C5.6,23.7,0.3,18.4,0.3,12C0.3,5.6,5.6,0.3,12,0.3c6.4,0,11.7,5.2,11.7,11.7C23.7,18.4,18.4,23.7,12,23.7z M12,2.3
	c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.3,12,2.3z"/>}
    </svg>
}

Add.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
}
export default Add