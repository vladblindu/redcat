import React from 'react'
import Footer from './footer'

const LegacyPage = ({children}) =>
    <div className="w-full min-h-full">
        <div className="central-window">
            {children}
        </div>
        <div className="w-full fixed bottom-0">
        <Footer/>
        </div>
    </div>

export default LegacyPage