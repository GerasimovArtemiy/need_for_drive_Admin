import React from 'react'
import { SearchIcon, BellIcon, ArrowIcon } from './HeaderIcons'
import cl from './Header.module.scss'
import avatar from '../../assets/img/pepe.png'

const Header: React.FC = () => {
    return (
        <div className={cl.header}>
            <div className={cl.search_wrap}>
                <div className={cl.search_container}>
                    <div className={cl.search}>
                        <button className={cl.search_icon}>{SearchIcon}</button>
                        <input placeholder="Поиск ..." className={cl.search_input} type="text" />
                    </div>
                </div>
            </div>
            <div className={cl.notice}>
                <div>{BellIcon}</div>
                <div className={cl.counter}>2</div>
            </div>
            <div className={cl.profile}>
                <img className={cl.profile_avatar} src={avatar} />
                <p className={cl.profile_name}>Admin</p>
                <div className={cl.adminPanel}>
                    <button className={cl.adminPanel_arrow}>{ArrowIcon}</button>
                </div>
            </div>
        </div>
    )
}

export default Header
