import React from 'react'
import Header from '../layout/header'
import ready from '../../lib/splash/ready'
import ErrorLayout from './error-layout'

const EndGame = ({err}) => {

    React.useEffect(ready)
    return  <div>
        <Header/>
            <ErrorLayout eno={err} oops />
    </div>
}

export default EndGame
