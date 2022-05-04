import React from 'react'
import Button from '../../../UI/Buttons/Button'
import OrderInput from './OrderInput'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IOrderInput, IOrderFormValues } from '../../../../hooks/useOrderFormInputs'
import { yupResolver } from '@hookform/resolvers/yup'
import { orderFormValidationSchema } from '../../../../YupValidations/OrderFormValidation'
import cl from './OrderEditSection.module.scss'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { useOrderObject } from '../../../../hooks/useOrderObject'
import { putOrder } from '../../../../store/Slices/OrderSlice'

interface IOrderEditSectionProps {
    inputs: IOrderInput[]
}

const OrderEditSection: React.FC<IOrderEditSectionProps> = ({ inputs }) => {
    const { orderId } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const createOrderObject = useOrderObject()
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IOrderFormValues>({
        mode: 'onSubmit',
        resolver: yupResolver(orderFormValidationSchema),
    })

    const onSubmit: SubmitHandler<IOrderFormValues> = async (data) => {
        const newOrder = createOrderObject(data)
        if (newOrder && orderId) {
            dispatch(putOrder({ orderId: orderId, order: newOrder }))
        }
    }

    return (
        <section className={cl.orderForm}>
            <div className={cl.orderForm_container}>
                <form className={cl.carForm_form} onSubmit={handleSubmit(onSubmit)}>
                    <h3>Изменить заказ</h3>
                    <div className={cl.input_container}>
                        {inputs.map(({ id, name, placeholder, label, items, defaultValue }) => (
                            <Controller
                                key={id}
                                name={name}
                                control={control}
                                defaultValue={defaultValue}
                                render={({ field }) => (
                                    <OrderInput
                                        errors={errors}
                                        field={field}
                                        placeholder={placeholder}
                                        name={name}
                                        label={label}
                                        items={items}
                                        optionKey="name"
                                        id={id}
                                    />
                                )}
                            />
                        ))}
                    </div>
                    <div className={cl.btn_container}>
                        <Button
                            type="button"
                            title="Вернуться"
                            className={cl.btn_back}
                            onClick={() => navigate(-1)}
                        ></Button>
                        <Button type="submit" title="Готово" className={cl.btn}></Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default OrderEditSection
