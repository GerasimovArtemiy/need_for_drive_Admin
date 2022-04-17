import React from 'react'
import SelectFilter from '../../UI/SelectFilter/SelectFilter'
import Button from '../../UI/Buttons/Button'
import cl from '../OrderTabHeader/OrderTabHeader.module.scss'

const CarTabHeader: React.FC = () => {
    return (
        <div className={cl.filters}>
            <div className={cl.filters_container}>
                <SelectFilter />
                <SelectFilter />
            </div>
            <div className={cl.filters_btns}>
                <Button type="button" title="Сбросить" className={cl.btn_reset} />
                <Button type="button" title="Применить" className={cl.btn} />
            </div>
        </div>
    )
}

export default CarTabHeader
