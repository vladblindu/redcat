import React from 'react'
import PropTypes from 'prop-types'
import {ca} from '../../../globals/helpers'

const containerCss = ca('central-window rounded-xl bg-paper border-4 border-primary' +
    ' ink-inverted w-72 md:w-96')
const headerCss = ca('w-full bg-primary text-ink-inverted text-center text-2xl font-bold rounded-t-md px-8 py-2')
const bodyCss = ca('px-6 py-4')

const DialogWindow = ({title, className, headerClass, bodyClass, children}) => {
    return <div className={containerCss(className)}>
        <div className={headerCss(headerClass)}>
            {title}
        </div>
        <div className={bodyCss(bodyClass)}>
            {children}
        </div>
    </div>
}

DialogWindow.propTypes = {
    title: PropTypes.string.isRequired,
    headerCss: PropTypes.string,
    bodyCss: PropTypes.string,
    className: PropTypes.string
}

export default DialogWindow