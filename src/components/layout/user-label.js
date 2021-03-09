import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const UserLabel = ({user, column}) => {
    const vars = {accountType: `${user.accountType}`}
    return <div className={cn('flex-1 relative', {
        'flex justify-center md:justify-start  items-center': !column
    })}>
        <div className="mr-4">
            <img src={user.avatar} className="w-12 h-12 cursor-default" alt="user-avatar"/>
        </div>
        <div>
            <div className="font-bold text-lg cursor-default">{user.name}</div>
            <div className="cursor-default">Account type</div>
        </div>
    </div>
}

UserLabel.propTypes = {
    column: PropTypes.bool,
    user: PropTypes.object
}

export default UserLabel
