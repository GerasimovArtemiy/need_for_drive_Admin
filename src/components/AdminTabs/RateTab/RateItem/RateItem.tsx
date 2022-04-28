import React from 'react'
import Button from '../../../UI/Buttons/Button'
import ItemDescr from './ItemDescr'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { deleteRateById, deleteRateTypeById, getAllRates } from '../../../../store/Slices/RateSlice'
import { IRate } from '../../../Interfaces/RateInterface'
import { CancelButton } from '../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import cl from './RateItem.module.scss'

interface IrateItemProps {
    rate: IRate
}
interface IDeleteRateById {
    rateId: string
    rateTypeId: string
}

const RateItem: React.FC<IrateItemProps> = ({ rate }) => {
    const dispatch = useAppDispatch()
    const deleteRate = async (id: IDeleteRateById) => {
        await dispatch(deleteRateById(id.rateId))
        await dispatch(deleteRateTypeById(id.rateTypeId))
        dispatch(getAllRates())
    }
    return (
        <div className={cl.rate}>
            <div className={cl.rate_container}>
                <ItemDescr title="Тариф" rateItem={rate.rateTypeId?.name} />
                <ItemDescr title="Время" rateItem={rate.rateTypeId?.unit} />
                <ItemDescr title="Цена" rateItem={rate?.price} />
                <Button
                    type={'button'}
                    className={cl.button}
                    title={'Удалить'}
                    onClick={() => deleteRate({ rateId: rate.id, rateTypeId: rate.rateTypeId?.id })}
                >
                    <div className={cl.button_img}>{CancelButton}</div>
                </Button>
            </div>
        </div>
    )
}

export default RateItem
