import React from "react"
import {Form, Formik} from 'formik'
import {GQL, useHttp} from '../../lib/http'
import {createMutation, useInitialValues} from '../../forms/'
import TextInput from '../__base__/text-input'
import SubmitButton from '../__base__/buttons/submit-button'

const UPDATE_PROFILE = 'updateProfile'

const EditSecurity = () => {

    const http = useHttp(GQL)
    const initialValues = useInitialValues(EditSecurity.shape)

    const onSubmit = async (values, {setSubmitting}) => {
        setSubmitting(true)
        const query = createMutation(UPDATE_PROFILE, values)
        const res = await http(query)
        // TODO success/error notification
        if (res.success) alert('ok')
    }

    return <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {
            ({isSubmitting, dirty, isValid, validateForm}) => {
                return <Form>

                    <TextInput
                        type="password"
                        name="oldPassword"
                        label='Old Password'/>

                    <TextInput
                        type="password"
                        name="newPassword"
                        label='New Password'/>

                    <TextInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"/>

                    <div className='flex justify-center md:justify-end pt-2'>
                        <SubmitButton
                            label="Submit"
                            disabled={isSubmitting || !isValid || !dirty}/>
                    </div>
                </Form>

            }}
    </Formik>
}


EditSecurity.shape = {
    oldPassword: {
        type: 'string',
        case: true
    },
    newPassword: {
        type: 'string'
    },
    confirmPassword: {
        type: 'string'
    }
}

export default EditSecurity
