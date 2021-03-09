import React from 'react'
import cn from 'classnames'
import {useLangs} from '../../lib/strings'
import CaretDown from '../svg/caret-down'
import {useOutsideClick} from '../../globals/helpers'

const LangSwitch = () => {
    const [opened, setOpened] = React.useState(false)
    const {lang, langs, setLang, meta} = useLangs()

    const open = () => {
        setOpened(true)
    }

    const close = () => {
        setOpened(false)
    }

    const ref = React.useRef()
    useOutsideClick(ref, () => {opened && close()})

    return <div>
        <div
            className={cn(
                'flex justify-end items-center p-2 rounded-lg',
                {
                    'hover:bg-primary-hover': !opened
                }
            )}
            onClick={open}>
            <img
                className='mr-2'
                src={meta[lang].flag}
                alt={lang}
                width="24"
                height="24"/>
            <CaretDown/>
        </div>
        <ul className={cn(
            'display-none absolute right-0 mr-8 bg-primary',
            'border-2 rounded-lg',
            {
                'border-primary-hover': opened
            }
        )}
            style={{display: opened ? 'block' : 'none'}}
            ref={ref}>
            {langs.map(lng =>
                <li
                    className="flex items-center justify-between w-32 hover:bg-primary-hover px-4 py-2"
                    key={lng}
                    onClick={() => {
                        setLang(lng)
                        close()
                    }}>
                    {meta[lng].name}<img
                    src={meta[lng].flag}
                    alt={lng}
                    width="24"
                    height="24"/></li>
            )}
        </ul>
    </div>
}

export default LangSwitch