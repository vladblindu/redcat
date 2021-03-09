import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {useOutsideClick} from '../../../globals/helpers'
import Check from '../../svg/check'
import {useField} from 'formik'
import Chevron from '../../svg/chevron'
import {extractor} from './helpers'
import {DEFAULT_OPTS} from '../../../lib/splash/constants'
import {DROPDOWN_FORMATS} from './constants'

const DropdownSelect = ({name, label, items, strings, size, opts}) => {

    // normalize props
    opts = {...DEFAULT_OPTS, ...opts}
    const _items = extractor(items)

    // hooks and state
    const [opened, setOpen] = React.useState(false)

    const close = () => {
        setOpen(false)
    }

    const toggle = () => {
        setOpen(!opened)
    }

    // Fromik stuff
    const fieldData = useField(name)
    let {value, onBlur} = fieldData[0]
    const {setValue} = fieldData[2]

    // dropdown stuff
    const ref = React.useRef()
    useOutsideClick(ref, () => {
        opened && close()
    })
    if (!value) value = _items[0][1]
    const isSelected = _items.findIndex(item => value === item[1])

    return <div
        className="relative w-full cursor-pointer mb-4"
        onBlur={onBlur}>
        <div className="mb-2 text-xl">
            {label}
        </div>
        <div
            onClick={() => {
                items.length && toggle()
            }}
            className={cn(
            `flex justify-between items-center pl-4 border-2 rounded-lg ${DROPDOWN_FORMATS[size]}`,
            {
                'bg-paper text-ink border-ink-hover': !opts.dark,
                'bg-primary text-ink-inverted': opts.dark,
                'text-ink-hover': !items.length
            }
        )}>
            {strings(_items[isSelected][0])}
            <div
                className="px-2">
                <Chevron/>
            </div>
        </div>
        <ul ref={ref}
            className={cn(
                'absolute left-0 w-full rounded-lg px-2 py-2 mt-2 z-20 border-2 border-ink-hover',
                {
                    'bg-paper text-ink border-ink-hover': !opts.dark,
                    'bg-primary text-ink-inverted': opts.dark,
                    'block': opened,
                    'hidden': !opened
                })}>
            {items.length && _items.map((item, idx) => {
                const Icon = items[idx].icon
                return <li
                    onClick={() => {
                        setValue(item[1])
                        close()
                    }}
                    key={item[0]}
                    className={cn(
                        'relative flex justify-start items-center px-3 py-1 mb-1 border-2 rounded-lg border-transparent',
                        {
                            'hover:border-ink-inverted': opts.dark,
                            'hover:border-ink-hover': !opts.dark
                        })}>
                    {opts.check && value === item[1] ? <Check className="-ml-2 mr-1"/> : ' '}
                    <div className="w-full flex justify-between items-center">
                        <div className="flex-1">
                            {opts.check && isSelected ? <Check/> : ' '}
                            <span>{strings(item[0])}</span>
                        </div>
                        {Icon && <Icon size="sm"/>}
                    </div>
                </li>
            })}
        </ul>
    </div>
}

DropdownSelect.defaultProps = {
    opts: {},
    items: [],
    dark: false,
    check: true,
    size: 'md'
}

DropdownSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    items: PropTypes.array,
    strings: PropTypes.func.isRequired,
    size: PropTypes.string,
    opts: PropTypes.object
}

export default DropdownSelect