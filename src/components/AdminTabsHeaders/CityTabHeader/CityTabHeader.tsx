import React, { ChangeEvent, useState, useMemo } from 'react'
import Button from '../../UI/Buttons/Button'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { postCity, getCities } from '../../../store/Slices/CitySlice'
import TitlesItems from '../TitlesItems/TitlesItems'
import { titlesItems } from './constants'
import cl from './CityTabHeader.module.scss'

const CityTabHeader: React.FC = () => {
    const [cityValue, setCityValue] = useState<string>('')
    const [isEmptyValue, setIsEmptyValue] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.currentTarget.value)
    }

    const addCity = async (city: string) => {
        if (cityValue !== '') {
            await dispatch(postCity(city))
            setCityValue('')
            dispatch(getCities())
        } else {
            setIsEmptyValue(true)
        }
    }

    useMemo(() => {
        setIsEmptyValue(false)
    }, [cityValue])

    return (
        <>
            <div className={cl.addCity}>
                <input
                    className={cl.addCity_input}
                    type="text"
                    value={cityValue}
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
            <div className={isEmptyValue ? cl.addCity_err : null}>
                {isEmptyValue ? 'Что бы добавить город, заполните поле ввода!' : null}{' '}
            </div>
            <div className={cl.titlesItems_container}>
                <TitlesItems titles={titlesItems} />
            </div>
        </>
    )
}

export default CityTabHeader
