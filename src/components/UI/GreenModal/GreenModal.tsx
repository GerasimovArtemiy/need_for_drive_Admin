import React from 'react'
import tick from '../../../assets/icons/tick_mark.svg'
import closeCross from '../../../assets/icons/close_cross.svg'
import cl from './GreenModal.module.scss'

interface IgreenModal {
    active: boolean
    setActive: (active: boolean) => void
}
const GreenModal: React.FC<IgreenModal> = ({ active, setActive }) => {
    return (
        <div
            className={active ? cl.greenModal_active : cl.greenModal}
            onClick={() => setActive(!active)}
        >
            <div className={cl.greenModal_container}>
                <div className={cl.greenModal_item}>
                    <img className={cl.greenModal_img} src={tick} alt="tick"></img>
                    <span>Успех! машина добавлена</span>
                </div>
                <div className={cl.greenModal_item}>
                    <img className={cl.greenModal_img} src={closeCross} alt="cross"></img>
                </div>
            </div>
        </div>
    )
}

export default GreenModal
