import React from "react"
import PropTypes from 'prop-types'
import {Form, Formik} from 'formik'
import {GQL, useHttp} from '../../lib/http'
import {createMutation, useInitialValues} from '../../forms/'
import TextInput from '../__base__/text-input'
import SubmitButton from '../__base__/buttons/submit-button'
import TextArea from '../__base__/text-area'

const UPDATE_PROFILE = 'updateProfile'
const USER_PROFILE = 'userProfile'

const EditProfile = ({edit}) => {

    const http = useHttp(GQL)
    const initialValues = useInitialValues(EditProfile.shape, edit && USER_PROFILE)

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
                        type="text"
                        name="contactName"
                        label='Contact name'/>

                    <TextInput
                        type="text"
                        name="email"
                        label='Email'/>

                    <TextInput
                        type="text"
                        name="phone"
                        label='Phone'/>

                    <TextArea
                        type="text"
                        name="address"
                        label="Address"/>

                    <div className='flex justify-center md:justify-end pt-2'>
                        <SubmitButton
                            label="Submit"
                            disabled={isSubmitting || !isValid || !dirty}/>
                    </div>
                </Form>

            }}
    </Formik>
}

EditProfile.propTypes = {
    edit: PropTypes.bool
}

EditProfile.shape = {
    $asyncInit: true,
    contactName: {
        type: 'string',
        case: true
    },
    email: {
        type: 'string'
    },
    address: {
        type: 'string'
    },
    phone: {
        type: 'string'
    }
}

export default EditProfile
