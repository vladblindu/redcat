import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {useOutsideClick} from '../../../globals/helpers'
import CaretDown from '../../svg/caret-down'
import {getters} from './helpers'
import Check from '../../svg/check'
import {useField} from 'formik'

const DropdownMenu = ({name, label, items, strings, opts}) => {
    // Fromik stuff
    const [field, meta, helpers] = useField(name)
    const {value, onBlur} = field
    const {setField} = helpers

    // hooks and state
    const [opened, setOpen] = React.useState(false)

    const close = () => {
        setOpen(false)
    }

    const toggle = () => {
        setOpen(!opened)
    }

    // dropdown stuff
    const ref = React.useRef()
    useOutsideClick(ref, () => {opened && close()})

    //dropdown component setup logic
    opts = {...DEFAULT_OPTS, ...opts}

    const {dark, check, menu} = opts
    const [getKey, getValue] = getters(items, opts)

    const selected = items.findIndex(item => value === getValue(item))

    if (menu) {
        if (!items.length)
            throw Error('DEVERR: Menu item list can\'t be empty')
        if (!value)
            throw Error('DEVERR: Menu initial item can\'t be falsy')
    } else {
        if (!items.length) label = strings('empty-list/g')
        if (!value) label = strings('empty-selection/g')
    }

    return <div className="relative">
        <div>{!menu && label}</div>
        <div
            onClick={() => {
                items.length && toggle()
            }}
            onBlur={onBlur}
            className={cn(
                'block rounded-lg cursor-pointer',
                {
                    'bg-primary text-ink-inverted': dark,
                    'bg-paper text-ink border-2 border-ink-hover': !dark
                })}>

            <div className={cn(
                'flex justify-between items-center pl-4 py-3 font-bold',
                {
                    'text-ink-hover': !items.length
                }
            )}>
                {label.toUpperCase()}
                <div
                    className="px-2 mt-2">
                    <CaretDown/>
                </div>
            </div>
            <div className="h-8 text-md text-error italic">
                {meta.touched && meta.error ? meta.error.replace(name, label) : ''}
            </div>
            <ul ref={ref}
                className={cn(
                    'absolute w-full left-0 rounded-lg p-4 -mt-8 z-20',
                    {
                        'block': opened,
                        'hidden': !opened
                    })}>
                {items.length && items.map((item, idx) => {
                    const LeftIcon = item.icon
                    const isSelected = idx === selected
                    return <li
                        onClick={() => {
                            setField(getValue(item))
                            close()
                        }}
                        key={getKey(item)}
                        className={cn(
                            'relative pl-5 pr-4 py-2 rounded-lg border-transparent',
                            {
                                'flex justify-between items-center': item.icon,
                                'bg-primary text-ink-inverted border-2 hover:border-ink-hover': dark,
                                'bg-paper text-ink border-2 hover:border-paper-hover': !dark
                            })}>
                        {check && isSelected ? <Check/> : ' '}
                        <span>{strings(getKey(item))}</span>
                        {item.icon && <LeftIcon/>}
                    </li>
                })}
            </ul>
        </div>
    </div>
}

DropdownMenu.defaultProps = {
    opts: {},
    items: []
}

DropdownMenu.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.array,
    strings: PropTypes.func.isRequired,
    opts: PropTypes.object
}

export default DropdownMenu