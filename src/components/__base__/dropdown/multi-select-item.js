import React from 'react'
import PropTypes from 'prop-types'
import RemoveItem from '../buttons/remove-item'
import {ca} from '../../../globals/helpers'

const MultiSelectItem = ({value, remove, strings, className}) => {

    const baseClass = ca('flex items-center bg-primary rounded-lg mr-2 text-ink-inverted px-2')

    return <div className={baseClass(className)}>
        <span className="mr-2">{strings(value)}</span>
        <RemoveItem remove={() => remove(value)}/>
    </div>
}

MultiSelectItem.propTypes = {
    value: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    strings: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default MultiSelectItem