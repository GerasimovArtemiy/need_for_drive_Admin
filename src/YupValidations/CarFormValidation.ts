import * as yup from 'yup'
export const imgExtensions = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png', '']

export const carAddValidationSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    number: yup.string().required('Поле обязательно'),
    priceMin: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    priceMax: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    description: yup.string().required('Поле обязательно'),
    category: yup.mixed().required('Поле обязательно'),
    tank: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    image: yup
        .mixed()
        .required('Поле не должно быть пустым')
        .test(
            'image',
            'Изображение обязательно',
            (value) => value[0] && imgExtensions.includes(value[0].type)
        ),
})
export const carEditValidationSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    number: yup.string().required('Поле обязательно'),
    priceMin: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    priceMax: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
    description: yup.string().required('Поле обязательно'),
    category: yup.mixed().required('Поле обязательно'),
    tank: yup.number().typeError('Пожалуйста введите число').required('Поле обязательно'),
})
