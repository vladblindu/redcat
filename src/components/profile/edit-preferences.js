import React from "react"
import {Form, Formik} from 'formik'
import {GQL, useHttp} from '../../lib/http'
import {createMutation} from '../../forms/'
import SubmitButton from '../__base__/buttons/submit-button'
import {useAuth} from '../../lib/auth'
import EditAvatar from '../__base__/avatar/edit-avatar'

const UPDATE_PROFILE = 'updateProfile'

const EditPreferences = () => {

    const http = useHttp(GQL)
    const {user} = useAuth()
    const initialValues = {
        avatar: user.avatar,
    }

    const onSubmit = async (values, {setSubmitting}) => {
        setSubmitting(true)
        const query = createMutation(UPDATE_PROFILE, values)
        const res = await http(query)
        // TODO success/error notification
        if (res.success) alert('ok')
    }

    return <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {
            ({isSubmitting, dirty, isValid}) => {

                return <Form>
                    <EditAvatar name="avatar"/>
                    <div className='flex justify-center md:justify-end pt-2'>
                        <SubmitButton
                            label='Submit'
                            disabled={isSubmitting || !isValid || !dirty}/>
                    </div>
                </Form>
            }}
    </Formik>
}

EditPreferences.shape = {
    avatar: {
        type: 'string',
    },
    defLang: {
        type: 'string'
    }
}

export default EditPreferences
