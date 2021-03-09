import React from 'react'
import Page from '../layout/page.layout'

const DummyPage = () =>

    <Page title="Dummy page" subtitle="subtitle">Cucubau</Page>


DummyPage.route = {
    path: '/dummy',
    strings: 'dummy',
    category: 'Dummy',
    listable: true,
    navigable: true
}

export default DummyPage