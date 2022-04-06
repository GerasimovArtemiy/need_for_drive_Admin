import React from 'react'
import { SearchIcon, BellIcon, ArrowIcon } from './HeaderIcons'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { setDropMenuProfile } from '../../store/Slices/ModalSlice'
import cl from './Header.module.scss'
import avatar from '../../assets/img/pepe.png'

const Header: React.FC = () => {
    const dispatch = useAppDispatch()
    const { isDropMenuProfile } = useAppSelector((state) => state.modal)
    const propagationDropMenu = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation()
    }
    return (
        <>
            <header className={cl.header}>
                <div className={cl.search_wrap}>
                    <div className={cl.search_container}>
                        <div className={cl.search}>
                            <button className={cl.search_icon}>{SearchIcon}</button>
                            <input
                                placeholder="Поиск ..."
                                className={cl.search_input}
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className={cl.notice}>
                    <div>{BellIcon}</div>
                    <div className={cl.counter}>2</div>
                </div>
                <div
                    onClick={() => dispatch(setDropMenuProfile(!isDropMenuProfile))}
                    className={cl.profile}
                >
                    <img className={cl.profile_avatar} src={avatar} />
                    <p className={cl.profile_name}>Admin</p>
                    <div className={cl.adminPanel}>
                        <button
                            className={
                                isDropMenuProfile ? cl.adminPanel_arrow_active : cl.adminPanel_arrow
                            }
                        >
                            {ArrowIcon}
                        </button>
                    </div>
                </div>
            </header>
            <div
                onClick={(e): void => propagationDropMenu(e)}
                className={
                    isDropMenuProfile ? cl.adminPanel_dropMenu_active : cl.adminPanel_dropMenu
                }
            >
                <button type="button" className={cl.adminPanel_btn}>
                    Профиль
                </button>
                <button type="button" className={cl.adminPanel_btn}>
                    Настройки
                </button>
                <button type="button" className={cl.adminPanel_btn}>
                    Выйти
                </button>
            </div>
        </>
    )
}

export default Header
