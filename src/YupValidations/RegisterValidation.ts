import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('Поле обязательно к заполнению')
        .min(3, 'Имя должно содержать минимум 3 символа'),
    username: yup
        .string()
        .required('Поле обязательно к заполнению')
        .min(5, 'Логин должен содержать минимум 5 символов')
        .matches(/[a-zA-Z0-9]/, 'Используйте латинские буквы и цифры'),

    password: yup
        .string()
        .required('Поле обязательно к заполнению')
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .matches(/[a-zA-Z0-9]/, 'Используйте латинские буквы и цифры'),

    confirmPassword: yup
        .string()
        .required('Поле обязательно к заполнению')
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .matches(/[a-zA-Z0-9]/, 'Используйте латинские буквы и цифры')
        .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})
