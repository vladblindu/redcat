import * as Yup from 'yup'
import {setLocale} from 'yup'
import validStrings from '../../config/validation.config'

const validationSchema = lang => {
    setLocale(validStrings[lang])
    return Yup.object().shape({
        name: Yup.string()
            .min(2)
            .max(64)
            .required(),
        email: Yup.string()
            .email().required()
            .max(150),
        message: Yup.string().required()
    })
}


export default validationSchema