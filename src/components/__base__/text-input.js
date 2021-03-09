import React from 'react'
import PropTypes from 'prop-types'
import {useField} from 'formik'
import Spinner from '../svg/spinner'
import {LG} from '../../globals/constants'
import {ca} from "../../globals/helpers";

const baseClass= ca('mb-2 text-lg')

const TextInput = ({label, subLabel, size, clear, className, ...props}) => {

    const [field, meta] = useField(props)

    const formats = {
        sm: "px-1 text-normal",
        md: "px-2 py-1 text-large",
        lg: "px-4 py-2 text-xl"
    }
    return (
        <div>
            <div className={baseClass(className)}>
                {label}
                {subLabel && <span className="text-sm italic ml-2">({subLabel})</span>}
            </div>
            <input
                className={`w-full rounded-lg border-2 border-ink-hover ${formats[size]}`}
                {...field}
                {...props}
                onFocus={() => {
                    clear && clear()
                }}/>
            {
                meta.isValidating
                    ? <span className="absolute" style={{transform: 'translate(-32px, 3px)'}}>
                    <Spinner/>
                    </span>
                    : ''
            }
            <div className="text-sm h-6 italic text-error">
                {(meta.touched && meta.error) ? meta.error.replace(props.name, label) : ''}
            </div>
        </div>
    )
}

TextInput.defaultProps = {
    size: LG
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    subLable: PropTypes.string,
    size: PropTypes.string,
    clear: PropTypes.func
}

export default TextInput