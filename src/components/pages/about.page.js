import React from 'react'
import Page from '../layout/page.layout'
import About from "../forms_a/about/about";
import {ABOUT_ROUTE} from "../routing/constants";




const AboutPage = () =>
        <Page > <About/></Page>



AboutPage.route = {
    path: ABOUT_ROUTE,
    legacy: true,
    category: 'About',
    listable: false,
    navigable: true
}

export default AboutPage
