import React from 'react'
import Button from '../../UI/Buttons/Button'
import cl from './CityTabHeader.module.scss'

const CityTabHeader: React.FC = () => {
    return (
        <div className={cl.addCity}>
            <input className={cl.addCity_input} type={'text'} placeholder="Введите город..." />
            <Button type={'button'} title="Добавить" className={cl.addCity_button} />
        </div>
    )
}

export default CityTabHeader
