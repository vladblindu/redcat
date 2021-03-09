import {object, setLocale, string} from 'yup'
import validStrings from '../../../config/validation.config'

const validationSchema =  lang => {
    setLocale(validStrings[lang])
    return object().shape({
        email: string().email().required()
    })
}

export default validationSchema