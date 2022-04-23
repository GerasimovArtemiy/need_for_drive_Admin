import React from 'react'
import Button from '../../UI/Buttons/Button'
import TitlesItems from '../TitlesItems/TitlesItems'
import { titlesItems } from './constants'
import cl from './CityTabHeader.module.scss'

const CityTabHeader: React.FC = () => {
    return (
        <>
            <div className={cl.addCity}>
                <input className={cl.addCity_input} type={'text'} placeholder="Введите город..." />
                <Button type={'button'} title="Добавить" className={cl.addCity_button} />
            </div>
            <div className={cl.titlesItems_container}>
                <TitlesItems titles={titlesItems} />
            </div>
        </>
    )
}

export default CityTabHeader
