import React from 'react'
import { ICar } from '../../../Interfaces/CarInterface'
import cl from './CarItem.module.scss'
import CarItemButtons from './CarItemButtons/CarItemButtons'

interface ICarItemProps {
    car: ICar
}

const CarItem: React.FC<ICarItemProps> = ({ car }) => {
    return (
        <div className={cl.car}>
            <div className={cl.car_container}>
                <div className={cl.car_imgContainer}>
                    {car ? (
                        <img className={cl.car_img} src={car.thumbnail.path} alt="car" />
                    ) : (
                        <span>Нет фото</span>
                    )}
                </div>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        Модель <span>{car ? car.name : 'Не известно'}</span>
                    </li>
                    <li className={cl.descr_item}>
                        Цена от:
                        <span>{car.priceMin}₽</span>
                    </li>
                    <li className={cl.descr_item}>
                        Цена до:
                        <span>{car.priceMax}₽</span>
                    </li>
                </ul>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        Топливо: <span>{car.tank ? car.tank : 'Не известно'}</span>
                    </li>
                    <li className={cl.descr_item}>
                        Номер:
                        <span>{car.number}</span>
                    </li>
                    <li className={cl.descr_item}>
                        Категория:
                        <span>{car.categoryId.name}</span>
                    </li>
                </ul>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        Описание: <span>{car ? car.description : 'Не известно'}</span>
                    </li>
                </ul>
                <CarItemButtons />
            </div>
        </div>
    )
}

export default CarItem
