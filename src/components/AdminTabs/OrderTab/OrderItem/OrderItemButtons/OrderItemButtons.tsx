import React from 'react'
import Button from '../../../../UI/Buttons/Button'
import cl from './OrderItemButtons.module.scss'
import { AcceptButton, CancelButton, ChangeButton } from './ButtonIcons'
import { useNavigate } from 'react-router-dom'
import { routerPath } from '../../../../../routes/routerPath'

interface IOrderItemButtonsProps {
    orderId: string
}

const OrderItemButtons: React.FC<IOrderItemButtonsProps> = ({ orderId }) => {
    const navigate = useNavigate()

    const showEditOrderPage = () => {
        navigate(`${routerPath.orderList}/${orderId}`)
    }

    return (
        <div className={cl.button_container}>
            <Button type={'button'} className={cl.button} title={'Готово'}>
                <div className={cl.button_img}>{AcceptButton}</div>
            </Button>
            <Button type={'button'} className={cl.button} title={'Отмена'}>
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
