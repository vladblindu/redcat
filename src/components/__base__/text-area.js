import React from 'react'
import PropTypes from 'prop-types'
import {useField} from 'formik'

const TextArea = ({label, subLabel, clear, ...props}) => {

    const [field, meta] = useField(props)

    return (
        <div>
            <div className="mb-2 text-lg">
                {label}
                {subLabel && <span className="text-md italic">({subLabel})</span>}
            </div>
            <textarea
                className="w-full px-2 rounded-lg border-2 border-ink-hover"
                {...field}
                {...props}
                onFocus={() => {
                    clear && clear()
                }}/>
            <div className="text-sm h-6 italic text-error">
                {meta.touched && meta.error ? meta.error.replace(props.name, label) : ''}
            </div>
        </div>
    )
}

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string,
    clear: PropTypes.func
}

export default TextArea