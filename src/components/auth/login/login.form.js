import React from 'react'
import {Form, Formik} from 'formik'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../../lib/auth'
import TextInput from '../../__base__/text-input'
import ArrowButton from '../../__base__/buttons/arrow-button'
import validationSchema from './login.validation'
import {HOME_ROUTE} from '../../routing/constants'

const LoginForm = () => {

    const [globalError, setGlobalError] = React.useState('')
    const {login} = useAuth()
    const {push} = useHistory()


    const initialValues = {
        identifier: '',
        password: ''
    }

    const onSubmit = async (values, {setSubmitting}) => {
        setSubmitting(true)
        const res = login(values.identifier, values.password)
        setSubmitting(false)
        if (res.error) return setGlobalError(res.message)
        push(HOME_ROUTE)
    }
    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({isSubmitting, dirty, isValid, validateForm}) => {

            return <Form>
                <TextInput name="identifier" type="email" label='Identifier' autoFocus/>
                <TextInput name="password" type="password" label='Password'/>
                <div className="flex justify-end">
                    <ArrowButton
                        className="text-primary"
                        size="lg"
                        disabled={isSubmitting || globalError || !isValid || !dirty}
                        type="submit"/>
                </div>
            </Form>
        }}
    </Formik>
}

export default LoginForm
