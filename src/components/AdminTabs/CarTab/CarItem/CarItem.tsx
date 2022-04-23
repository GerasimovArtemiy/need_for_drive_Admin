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
                        <span className={cl.descr_item_title}>Модель: </span>
                        <span className={cl.descr_item_subtitle}>
                            {car ? car.name : 'Не известно'}
                            <span> / </span>
                        </span>
                    </li>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_item_price}> От: </span>
                        <span className={cl.descr_item_subtitle}>{car.priceMin}₽</span>
                    </li>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_item_price}> До: </span>
                        <span className={cl.descr_item_subtitle}>{car.priceMax}₽</span>
                    </li>
                </ul>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_item_title}>Топливо: </span>
                        <span className={cl.descr_item_subtitle}>
                            {car.tank ? `${car.tank} л.` : 'Не известно'}
                            <span> / </span>
                        </span>
                    </li>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_item_title}> Номер:</span>
                        <span className={cl.descr_item_subtitle}>
                            {car.number ? car.number : 'Не известно'}
                            <span> / </span>
                        </span>
                    </li>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_item_title}>Категория: </span>
                        <span className={cl.descr_item_subtitle}>{car.categoryId.name} </span>
                    </li>
                </ul>
                <ul className={cl.descr_container}>
                    <li className={cl.descr_item}>
                        <span className={cl.descr_item_title}>Описание: </span>
                        <span className={cl.descr_item_subtitle}>
                            {car ? car.description : 'Не известно'}
                        </span>
                    </li>
                </ul>
                <CarItemButtons />
            </div>
        </div>
    )
}

export default CarItem
