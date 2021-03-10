import Header from './header'
import React from 'react'


export const AppLayout = ({children}) => <div className="h-full">
    <Header/>
        {children}
</div>

export const LegacyLayout = ({children}) =>
    <div className="w-screen h-screen text-xl bd-paper text-ink">
        <Header/>
            {children}
    </div>
