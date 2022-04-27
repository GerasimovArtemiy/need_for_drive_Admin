import React from 'react'
import Button from '../../UI/Buttons/Button'
import TitlesItems from '../TitlesItems/TitlesItems'
import { titlesItems } from './constants'
import cl from './RateTabHeader.module.scss'

const RateTabHeader: React.FC = () => {
    return (
        <>
            <div className={cl.addRate}>
                <input className={cl.addRate_input} type="text" placeholder="Название тарифа..." />
                <input className={cl.addRate_input} type="text" placeholder="Время действия..." />
                <input className={cl.addRate_input} type="text" placeholder="Цена тарифа..." />
                <Button type={'button'} title="Добавить" className={cl.addRate_button} />
            </div>
            <div className={cl.titlesItems_container}>
                <TitlesItems titles={titlesItems} />
            </div>
        </>
    )
}

export default RateTabHeader
