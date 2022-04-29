import React from 'react'
import Button from '../../../UI/Buttons/Button'
import { CancelButton } from '../../OrderTab/OrderItem/OrderItemButtons/ButtonIcons'
import { ICity } from '../../../Interfaces/CityInterface'
import cl from './CityItem.module.scss'

interface ICityItemProps {
    city: ICity
}

const CityItem: React.FC<ICityItemProps> = ({ city }) => {
    return (
        <div className={cl.city}>
            <div className={cl.city_container}>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_city}>{city ? city.name : 'Не известно'}</span>
                    </li>
                </ul>
                <Button type="button" className={cl.button} title="Удалить">
                    <div className={cl.button_img}>{CancelButton}</div>
                </Button>
            </div>
        </div>
    )
}

export default CityItem
