import React from 'react'
import Button from '../../../../UI/Buttons/Button'
import cl from './OrderItemButtons.module.scss'
import { AcceptButton, CancelButton, ChangeButton } from './ButtonIcons'

const OrderItemButtons: React.FC = () => {
    return (
        <div className={cl.button_container}>
            <Button type={'button'} className={cl.button} title={'Готово'}>
                <div className={cl.button_img}>{AcceptButton}</div>
            </Button>
            <Button type={'button'} className={cl.button} title={'Отмена'}>
                <div className={cl.button_img}>{CancelButton}</div>
            </Button>
            <Button type={'button'} className={cl.button} title={'Изменить'}>
                <div className={cl.button_img}>{ChangeButton}</div>
            </Button>
        </div>
    )
}

export default OrderItemButtons
