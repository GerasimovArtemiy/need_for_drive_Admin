import * as yup from 'yup'
export const imgExtensions = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', '']

export const carFormValidationSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    number: yup.string().required('Поле обязательно'),
    priceMin: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    priceMax: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    description: yup.string().required('Поле обязательно'),
    tank: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
})
