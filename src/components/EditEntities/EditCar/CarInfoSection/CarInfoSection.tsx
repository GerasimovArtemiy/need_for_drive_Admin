import React from 'react'
import { ICar } from '../../../Interfaces/CarInterface'
import cl from './CarInfoSection.module.scss'

interface ICarSectionProps {
    car: ICar
}

const CarInfoSection: React.FC<ICarSectionProps> = ({ car }) => {
    return (
        <section className={cl.model}>
            <div className={cl.model_container}>
                <h3>Модель</h3>
                <div className={cl.model_imageBox}>
                    <img
                        className={cl.model_imageBox_img}
                        src={car?.thumbnail?.path}
                        alt="car_img"
                    />
                </div>
                <div className={cl.model_descr}>
                    <span>Модель: </span> {car?.name}
                </div>
                <div className={cl.model_descr}>
                    <span>Номер: </span> {car.number ? car.number : 'Не известно'}
                </div>
                <div className={cl.model_descr}>
                    <span>Категория: </span> {car.categoryId?.name}
                </div>
                <div className={cl.model_descr}>
                    <span>Топливо: </span> {car.tank ? car.tank : 'Не известно'} л
                </div>
                <div className={cl.model_descr}>
                    <span>Цена от: </span> {car.priceMin}Р
                </div>
                <div className={cl.model_descr}>
                    <span>Цена от: </span> {car.priceMax}Р
                </div>
                <div className={cl.model_descr}>
                    <span>Описание: </span> {car.description}
                </div>
            </div>
        </section>
    )
}

export default CarInfoSection
