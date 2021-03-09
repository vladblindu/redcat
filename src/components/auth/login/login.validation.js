import {object, setLocale, string} from 'yup'
import validStrings from '../../../config/validation.config'

const validationSchema =  lang => {
    setLocale(validStrings[lang])
    return object().shape({
        identifier: string().email().required(),
        password: string().required()
    })
}

export default validationSchema