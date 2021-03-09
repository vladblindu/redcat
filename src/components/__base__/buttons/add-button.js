import React from 'react'
import Add from "../../svg/add";
import cn from 'classnames'

const AddButton = ({action, label, disabled}) =>
    <button
        onClick={action}
        className={cn('flex px-4 py-2 bg-primary rounded-lg text-ink-inverted font-semibold hover:bg-primary-hover cursor-pointer')}
        type='button'
        disabled={disabled}>
        <Add size='md' className='mr-2'/>
        <div>{label}</div>
    </button>

export default AddButton