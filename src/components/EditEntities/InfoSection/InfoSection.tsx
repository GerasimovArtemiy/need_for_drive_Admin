import React from 'react'
import { ICarInfoItems } from '../../../hooks/useCarInfoItems'
import { IOrderInfoItems } from '../../../hooks/useOrderInfoItems'
import cl from './InfoSection.module.scss'

interface ICarSectionProps {
    title: string
    items: ICarInfoItems[] | IOrderInfoItems[]
    image: string
}

const InfoSection: React.FC<ICarSectionProps> = ({ items, title, image }) => {
    return (
        <section className={cl.model}>
            <div className={cl.model_container}>
                <h3>{title}</h3>
                <div className={cl.model_imageBox}>
                    <img className={cl.model_imageBox_img} src={image} alt="car_img" />
                </div>
                {items.map(({ id, title, subtitle }) => (
                    <div key={id} className={cl.model_descr}>
                        <span>{title}: </span> {subtitle}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default InfoSection
