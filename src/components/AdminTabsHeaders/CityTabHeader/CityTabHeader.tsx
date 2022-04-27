import React, { ChangeEvent, useState } from 'react'
import Button from '../../UI/Buttons/Button'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { postCity, getCities } from '../../../store/Slices/CitySlice'
import TitlesItems from '../TitlesItems/TitlesItems'
import { titlesItems } from './constants'
import cl from './CityTabHeader.module.scss'

const CityTabHeader: React.FC = () => {
    const [cityValue, setCityValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.currentTarget.value)
    }

    const addCity = async (cityValue: string) => {
        await dispatch(postCity(cityValue))
        setCityValue('')
        dispatch(getCities())
    }
    return (
        <>
            <div className={cl.addCity}>
                <input
                    className={cl.addCity_input}
                    type="text"
                    placeholder="Введите город..."
                    onChange={(e) => changeValue(e)}
                />
                <Button
                    type="button"
                    title="Добавить"
                    className={cl.addCity_button}
                    onClick={() => {
                        addCity(cityValue)
                    }}
                />
            </div>
            <div className={cl.titlesItems_container}>
                <TitlesItems titles={titlesItems} />
            </div>
        </>
    )
}

export default CityTabHeader
