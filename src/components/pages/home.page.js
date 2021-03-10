import React from 'react'
import Home from "../screens/home"
import Page from "../layout/page.layout"
import Page_Header from "../../assets/app-id/backgroundimg.jpg";

const HomePage = () =>
    <div>
        <div className='relative overflow-hidden'>
            <img src={Page_Header} alt='Page_Header' className='w-full h-full'/>
        </div>
        <Page>
            <Home/>
        </Page>
    </div>


HomePage.route = {
    path: '/home',
    category: 'Form',
    listable: true,
    navigable: true
}

export default HomePage
