import React from 'react'
import Button from '../../../../UI/Buttons/Button'
import {
    ChangeButton,
    CancelButton,
} from '../../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import cl from './CarItemButtons.module.scss'

const CarItemButtons: React.FC = () => {
    return (
        <div className={cl.button_container}>
            <Button type="button" className={cl.button} title="Изменить">
                <div className={cl.button_img}>{ChangeButton}</div>
            </Button>
            <Button type="button" className={cl.button} title="Удалить">
                <div className={cl.button_img}>{CancelButton}</div>
            </Button>
        </div>
    )
}

export default CarItemButtons
