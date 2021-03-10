import React from 'react'
import Clients from "../screens/clients"
import Page from "../layout/page.layout"


const ClientsPage = () =>
    <Page ><Clients/></Page>

ClientsPage.route = {
    path: '/clients',
    category: 'Form',
    listable: true,
    navigable: true
}

export default ClientsPage
