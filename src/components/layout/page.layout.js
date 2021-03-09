import React from 'react'
import PropTypes from 'prop-types'
import Footer from './footer'

const Page = ({ children}) =>
    <div className="w-full min-h-full z-10 px-8 p-header overflow-scroll">
        <div className="mx-auto w-full md:w-4/5 lg:w-2/3 mb-lg">
            {children}
        </div>
        <Footer/>
    </div>

Page.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Page
