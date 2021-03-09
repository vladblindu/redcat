import React from 'react'
import Page from '../layout/page.layout'
import Tabs from "../../components/__base__/tabs"
import EditProfile from "./edit-profile"
import EditPreferences from './edit-preferences'
import EditSecurity from './edit-security'
import {PROFILE_ROUTE} from '../routing/constants'

const Profile = () => {

    const tabItems = [
        {
            title: 'Edit Profile',
            Component: <EditProfile/>
        },
        {
            title: 'Edit preferences',
            Component: <EditPreferences/>
        },
        {
            title: 'Edit Security',
            Component: <EditSecurity/>
        }
    ]

    return <Page
        title='Profile'
        subtitle='Profile page'>
        <Tabs tabItems={tabItems}/>
    </Page>
}

Profile.route = {
    path: PROFILE_ROUTE,
    strings: 'profile',
    category: 'Profile',
    listable: true,
    navigable: true
}

export default Profile
