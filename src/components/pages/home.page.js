import React from 'react'
import Home from "../forms_a/home";

const HomePage = () => {
    return (
            <Home/>
    )
}

HomePage.route = {
    path: '/home',
    strings: 'home/g',
    category: 'Form',
    listable: true,
    navigable: true
}

export default HomePage
