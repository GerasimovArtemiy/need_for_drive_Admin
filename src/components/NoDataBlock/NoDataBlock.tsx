import React from 'react'
import noDataImg from '../../assets/img/noDataImg.jpg'
import cl from './NoDataBlock.module.scss'

const NoDataBlock: React.FC = () => {
    return (
        <div className={cl.noData}>
            <span>Нет данных для отображения... </span>
            <img src={noDataImg} alt="noDataImg" />
        </div>
    )
}

export default NoDataBlock
