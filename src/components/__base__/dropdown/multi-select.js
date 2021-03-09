import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {useOutsideClick} from '../../../globals/helpers'
import Check from '../../svg/check'
import {useField} from 'formik'
import MultiSelectedDisplay from './multi-select-display'

const MultiSelect = ({name, label, items, strings, displayClassName, itemClassName}) => {

    // Formik stuf
    const [field, meta, helpers] = useField(name)
    const {value, onBlur} = field
    const {setValue} = helpers

    // hooks and state
    const [opened, setOpen] = React.useState(false)

    const close = () => {
        setOpen(false)
    }
    const toggle = () => {
        setOpen(!opened)
    }

    const ref = React.useRef()
    useOutsideClick(ref, () => {opened && close()})

    const remove = val => {
        setValue([...value.filter(v => val !== v)])
    }

    const add = val => {
        setValue([...value, val])
    }

    return <div className="w-full">
        <div>{label}</div>
        <div
            className="relative cursor-pointer"
            onClick={() => {
                items.length && !value.length && toggle()
            }}
            onBlur={onBlur}>
            <div>
                <MultiSelectedDisplay
                    value={value}
                    remove={remove}
                    toggle={toggle}
                    displayClassName={displayClassName}
                    itemClassName={itemClassName}
                    strings={strings}/>
            </div>
            <div className="h-8 text-md text-error italic">
                {meta.touched && meta.error ? meta.error.replace(name, label) : ''}
            </div>
            <ul ref={ref}
                className={cn(
                    'absolute w-full left-0 bg-paper rounded-lg p-4 -mt-8 z-20 border-2 border-ink-hover',
                    {'block': opened, 'hidden': !opened})}>
                {items.length && items.map(
                    val => {
                        const selected = value.includes(val)
                        return <li
                            onClick={() => {
                                if (selected) remove(val)
                                else add(val)
                            }}
                            key={val}
                            className="relative pl-5 pr-4 py-2 rounded-lg border-transparent bg-paper text-ink border-2 hover:border-paper-hover">
                            {selected && <Check/>}
                            <span>{strings ? strings(val) : val}</span>
                        </li>
                    })}
            </ul>
        </div>
    </div>
}

MultiSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.array,
    strings: PropTypes.func.isRequired,
    displayClassName: PropTypes.string,
    itemClassName: PropTypes.string
}

export default MultiSelect