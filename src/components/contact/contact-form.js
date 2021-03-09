import React from 'react'
import PropTypes from 'prop-types'
import {Form, Formik} from 'formik'
import validationSchema from './contact.validation'
import {HTTP, useHttp} from '../../lib/http'
import TextInput from '../__base__/text-input'
import TextArea from '../__base__/text-area'
import SubmitButton from '../__base__/buttons/submit-button'

const ContactForm = () => {

    const initialValues = {
        name: '',
        email: '',
        message: ''
    }

    const http = useHttp(HTTP)

    const onSubmit = async (values, {setSubmitting, resetForm}) => {
        setSubmitting(true)
        const res = await http('contact', values)
        if (res.success) {
            resetForm()
            setSubmitting(false)
        }
    }

    return <Formik initialValues={initialValues}
                   validationSchema={validationSchema}
                   onSubmit={onSubmit}>
        {
            ({isSubmitting, isValid, dirty, validateForm}) => {

                return <Form>
                    <TextInput name="name" label='Name' size="md"/>
                    <TextInput name="email" label='Email' size="md"/>
                    <TextArea name="message" label='Message'/>
                    <div className='flex justify-center md:justify-end pt-2'>
                        <SubmitButton disabled={isSubmitting || !isValid || !dirty} label='Submit'/>
                    </div>
                </Form>
            }}
    </Formik>
}

ContactForm.propTypes = {
    sendMessage: PropTypes.func,
    name: PropTypes.string,
    email: PropTypes.string
}

export default ContactForm
