import * as Yup from 'yup'

const validationSchema =  Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        avatar: Yup.string().matches(/^data:image\/png;base64/).required(),
        lang: Yup.string().length(2),
        home: Yup.string()
    })

export default validationSchema