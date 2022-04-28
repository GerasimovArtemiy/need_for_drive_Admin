import React from 'react'
import cl from './RateItem.module.scss'

interface IItemDescr {
    title: string
    rateItem: string | number
}

const ItemDescr: React.FC<IItemDescr> = ({ title, rateItem }) => {
    return (
        <>
            <ul className={cl.descr_container}>
                <li className={cl.descr_item}>
                    <span className={cl.descr_title}>{title}: </span>{' '}
                    <span className={cl.descr_subtitle}>{rateItem ? rateItem : 'Не известно'}</span>
                </li>
            </ul>
        </>
    )
}

export default ItemDescr
