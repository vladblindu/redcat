import React from 'react'
import PropTypes from 'prop-types'
import {ca} from '../../globals/helpers'
import cn from 'classnames'


const Tabs = ({tabItems, controlerClass, tabsClass, itemClass, activeClass, ...rest}) => {

    const baseTabsClass = ca('w-full my-8 cursor-pointer')
    const baseControlerClass = ca('w-full flex items-stretch text-lg text-ink-inverted mb-4 font-bold')
    const baseItemClass = ca('flex-1 bg-primary hover:bg-primary-hover text-center border-0 border-ink-hover')
    const baseActiveClass = ca('border-b-4 border-secondary')

    const [active, setActive] = React.useState(0)
    const SelectedComponent = tabItems[active].Component

    return <div className={baseTabsClass(tabItems)}>
        <ul className={baseControlerClass(controlerClass)}>
            {tabItems.map((tab, idx) =>
                <li key={tab.title}
                    onClick={() => {
                        setActive(idx)
                    }}
                    className={cn(
                        baseItemClass(itemClass),
                        {
                            'rounded-l-lg': idx === 0,
                            'rounded-r-lg': idx === (tabItems.length - 1),
                            'border-r-2': idx !== (tabItems.length - 1),
                        })}>
                    <div className={cn(
                        'px-4 py-2',
                        {
                            'rounded-l-lg': idx === 0,
                            'rounded-r-lg': idx === (tabItems.length - 1),
                            [baseActiveClass(activeClass)]: idx === active
                        })}>
                        {tab.title}
                    </div>
                </li>
            )}
        </ul>
        <div className={baseTabsClass(tabsClass)}>
            {
                React.cloneElement(SelectedComponent, {item: tabItems[active], ...rest})
            }
        </div>
    </div>
}

Tabs.propTypes = {
    tabItems: PropTypes.array,
    controlerClass: PropTypes.string,
    tabsClass: PropTypes.string,
    itemClass: PropTypes.string,
    activeClass: PropTypes.string
}

export default Tabs