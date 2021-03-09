import React from 'react'
import PropTypes from 'prop-types'
import MultiSelectItem from './multi-select-item'
import {ca} from '../../../globals/helpers'
import Chevron from '../../svg/chevron'

const MultiSelectedDisplay = ({value, remove, toggle, displayClassName, itemClassName, strings}) => {

    const baseDisplayClass = ca('flex justify-between pl-4 pr-0 py-2 rounded-lg text-ink border-2 border-ink-hover mb-px')

    return <div className={baseDisplayClass(displayClassName)}>
        <div className="flex items-center justify-start overflow-scroll">
            {!!value.length && value.map(
                val => <MultiSelectItem
                    key={val}
                    value={val}
                    remove={remove}
                    strings={strings}
                    className={itemClassName}/>)}
        </div>
        <div
            className="flex-1"
            onClick={toggle}>
            {!value.length && strings('empty-selection/g')}
        </div>
        <div
            className="px-2"
            onClick={toggle}>
            <Chevron/>
        </div>
    </div>
}

MultiSelectedDisplay.propTypes = {
    value: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    strings: PropTypes.func.isRequired,
    displayClassName: PropTypes.string,
    itemClassName: PropTypes.string
}

export default MultiSelectedDisplay
