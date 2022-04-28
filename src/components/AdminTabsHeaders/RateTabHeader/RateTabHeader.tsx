import React, { useState, ChangeEvent } from 'react'
import Button from '../../UI/Buttons/Button'
import TitlesItems from '../TitlesItems/TitlesItems'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { postRate, getAllRates } from '../../../store/Slices/RateSlice'
import { titlesItems, inputs } from './constants'
import cl from './RateTabHeader.module.scss'

interface IRateValueState {
    [index: string]: string | number
    name: string
    unit: string
    price: number | string
}

const RateTabHeader: React.FC = () => {
    const [rateValues, setRateValues] = useState<IRateValueState>({ name: '', unit: '', price: '' })

    const dispatch = useAppDispatch()
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setRateValues({ ...rateValues, [e.currentTarget.name]: e.currentTarget.value })
    }
    const addRate = async () => {
        await dispatch(
            postRate({
                name: rateValues.name,
                unit: rateValues.unit,
                price: +rateValues.price,
            })
        )
        setRateValues({ ...rateValues, name: '', unit: '', price: '' })
        dispatch(getAllRates())
    }

    return (
        <>
            <div className={cl.addRate}>
                {inputs.map(({ id, name, placeholder }) => (
                    <input
                        key={id}
                        className={cl.addRate_input}
                        type="text"
                        name={name}
                        value={rateValues[name]}
                        placeholder={placeholder}
                        onChange={(e) => changeValue(e)}
                    />
                ))}
                <Button
                    type={'button'}
                    title="Добавить"
                    className={cl.addRate_button}
                    onClick={addRate}
                />
            </div>
            <div className={cl.titlesItems_container}>
                <TitlesItems titles={titlesItems} />
            </div>
        </>
    )
}

export default RateTabHeader
