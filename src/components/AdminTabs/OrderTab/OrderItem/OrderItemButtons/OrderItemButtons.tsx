import React from 'react'
import Button from '../../../../UI/Buttons/Button'
import { AcceptButton, CancelButton, ChangeButton } from './ButtonIcons'
import { useNavigate } from 'react-router-dom'
import { routerPath } from '../../../../../routes/routerPath'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux-hooks'
import { deleteOrderById, getOrders } from '../../../../../store/Slices/OrderSlice'
import cl from './OrderItemButtons.module.scss'

interface IOrderItemButtonsProps {
    orderId: string
}

const OrderItemButtons: React.FC<IOrderItemButtonsProps> = ({ orderId }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { filter } = useAppSelector((state) => state.order)

    const showEditOrderPage = () => {
        navigate(`${routerPath.orderList}/${orderId}`)
    }
    const deleteOrder = async (selectedOrder: string) => {
        await dispatch(deleteOrderById(selectedOrder))
        await dispatch(getOrders({ ...filter.params, page: filter.currentPage, limit: 4 }))
    }

    return (
        <div className={cl.button_container}>
            <Button type={'button'} className={cl.button} title={'Готово'}>
                <div className={cl.button_img}>{AcceptButton}</div>
            </Button>
            <Button
                type={'button'}
                className={cl.button}
                title={'Удалить'}
                onClick={() => deleteOrder(orderId)}
            >
                <div className={cl.button_img}>{CancelButton}</div>
            </Button>
            <Button
                type={'button'}
                className={cl.button}
                title={'Изменить'}
                onClick={() => showEditOrderPage()}
            >
                <div className={cl.button_img}>{ChangeButton}</div>
            </Button>
        </div>
    )
}

export default OrderItemButtons
