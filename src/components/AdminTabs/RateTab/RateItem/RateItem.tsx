import React from 'react'
import Button from '../../../UI/Buttons/Button'
import ItemDescr from './ItemDescr'
import { IRate } from '../../../Interfaces/RateInterface'
import { CancelButton } from '../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import cl from './RateItem.module.scss'

interface IrateItemProps {
    rate: IRate
}

const RateItem: React.FC<IrateItemProps> = ({ rate }) => {
    return (
        <div className={cl.rate}>
            <div className={cl.rate_container}>
                <ItemDescr title="Тариф" rateItem={rate.rateTypeId?.name} />
                <ItemDescr title="Время" rateItem={rate.rateTypeId?.unit} />
                <ItemDescr title="Цена" rateItem={rate?.price} />
                <Button type={'button'} className={cl.button} title={'Удалить'}>
                    <div className={cl.button_img}>{CancelButton}</div>
                </Button>
            </div>
        </div>
    )
}

export default RateItem
