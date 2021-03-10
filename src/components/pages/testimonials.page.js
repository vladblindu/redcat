import React from 'react'
import Page from "../layout/page.layout"
import Testimonials from "../screens/testimonials"



const TestimonialsPage = () =>
    <Page> <Testimonials/></Page>

TestimonialsPage.route = {
    path: '/testimonials',
    category: 'Form',
    listable: true,
    navigable: true
}
export default TestimonialsPage
