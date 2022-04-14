import * as yup from 'yup'

export const AuthSchema = yup.object().shape({
    username: yup
        .string()
        .required('Поле обязательно к заполнению')
        .min(5, 'Логин должен содержать миниму 5 символов')
        .matches(/[a-zA-Z0-9]/, 'Используйте латинские буквы и цифры'),

    password: yup
        .string()
        .required('Поле обязательно к заполнению')
        .min(6, 'Пароль должен содержать миниму 6 символов')
        .matches(/[a-zA-Z0-9]/, 'Используйте латинские буквы и цифры'),
})
