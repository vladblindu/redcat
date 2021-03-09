import React from 'react'
import ContactForm from './contact-form'
import {CONTACT_ROUTE} from '../routing/constants'
import Page from '../layout/page.layout'


const ContactPage = () => {


    return <Page title='Contact form' subtitle='Create contact message'>
        <ContactForm/>
    </Page>
}
ContactPage.route = {
    path: CONTACT_ROUTE,

    legacy: true,
    category: 'Contact',
    listable: false,
    navigable: true
}

export default ContactPage
