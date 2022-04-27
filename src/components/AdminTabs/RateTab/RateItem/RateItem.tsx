import React from 'react'
import Button from '../../../UI/Buttons/Button'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { deleteRateById, getAllRates } from '../../../../store/Slices/RateSlice'
import { CancelButton } from '../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import { IRate } from '../../../Interfaces/RateInterface'
import cl from './RateItem.module.scss'

interface IrateItemProps {
    rate: IRate
}

const RateItem: React.FC<IrateItemProps> = ({ rate }) => {
    const dispatch = useAppDispatch()
    const deleteRate = async (rateId: string) => {
        await dispatch(deleteRateById(rateId))
        dispatch(getAllRates())
    }
    return (
        <div className={cl.rate}>
            <div className={cl.rate_container}>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_title}>Тариф: </span>{' '}
                        <span className={cl.descr_subtitle}>
                            {rate.rateTypeId ? rate.rateTypeId.name : 'Не известно'}
                        </span>
                    </li>
                </ul>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_title}>Время: </span>{' '}
                        <span className={cl.descr_subtitle}>
                            {rate.rateTypeId ? rate.rateTypeId.unit : 'Не известно'}
                        </span>
                    </li>
                </ul>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_title}>Цена: </span>{' '}
                        <span className={cl.descr_subtitle}>{rate ? `${rate.price}₽` : 'o_0'}</span>
                    </li>
                </ul>
                <Button
                    type={'button'}
                    className={cl.button}
                    title={'Удалить'}
                    onClick={() => deleteRate(rate.id)}
                >
                    <div className={cl.button_img}>{CancelButton}</div>
                </Button>
            </div>
        </div>
    )
}

export default RateItem
