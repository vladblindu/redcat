import React from 'react'
import {Form, Formik} from 'formik'

import validationSchema from './forgot-password.validation'
import TextInput from '../../__base__/text-input'
import SubmitButton from '../../__base__/buttons/submit-button'

const ForgotPasswordForm = () => {

    const onSubmit = async () => {
    }

    return <Formik
        initialValues={{email: ''}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({isSubmitting, dirty, isValid}) =>
            <Form>
                <TextInput name="email" type="email" label="email"/>
                <div className="flex justify-end mt-4 mb-12">
                    <SubmitButton label="submit" disabled={isSubmitting || !isValid || !dirty}/>
                </div>
            </Form>
        }
    </Formik>
}

export default ForgotPasswordForm
