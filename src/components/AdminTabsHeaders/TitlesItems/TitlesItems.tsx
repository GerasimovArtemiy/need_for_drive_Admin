import React from 'react'
import { ITitle } from '../../Interfaces/TitlesItemsInterface'
import cl from './TitlesItems.module.scss'

interface ITitlesItemsProps {
    titles: ITitle[]
}
const TitlesItems: React.FC<ITitlesItemsProps> = ({ titles }) => {
    return (
        <div className={cl.titlesItems}>
            {titles.map(({ id, title }) => (
                <div key={id} className={cl.titlesItems_item}>
                    {title}
                </div>
            ))}
        </div>
    )
}

export default TitlesItems
