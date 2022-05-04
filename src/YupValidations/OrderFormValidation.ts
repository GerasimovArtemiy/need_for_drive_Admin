import * as yup from 'yup'

export const orderFormValidationSchema = yup.object().shape({
    city: yup.mixed().required('Поле обязательно!'),
    point: yup.mixed().required('Поле обязательно!'),
    car: yup.mixed().required('Поле обязательно!'),
    color: yup.mixed().required('Поле обязательно!'),
    orderStatus: yup.mixed().required('Поле обязательно!'),
    tank: yup.mixed().required('Поле обязательно!'),
    childChair: yup.mixed().required('Поле обязательно!'),
    rightWheel: yup.mixed().required('Поле обязательно!'),
})
