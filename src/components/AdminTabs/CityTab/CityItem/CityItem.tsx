import React from 'react'
import Button from '../../../UI/Buttons/Button'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { deleteCityById, getCities } from '../../../../store/Slices/CitySlice'
import { CancelButton } from '../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import { ICity } from '../../../Interfaces/CityInterface'
import cl from './CityItem.module.scss'

interface ICityItemProps {
    city: ICity
}

const CityItem: React.FC<ICityItemProps> = ({ city }) => {
    const dispatch = useAppDispatch()
    const deleteCity = async (cityId: string) => {
        await dispatch(deleteCityById(cityId))
        dispatch(getCities())
    }

    return (
        <div className={cl.city}>
            <div className={cl.city_container}>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_city}>{city ? city.name : 'Не известно'}</span>
                    </li>
                </ul>
                <Button
                    type="button"
                    className={cl.button}
                    title="Удалить"
                    onClick={() => deleteCity(city.id)}
                >
                    <div className={cl.button_img}>{CancelButton}</div>
                </Button>
            </div>
        </div>
    )
}

export default CityItem
