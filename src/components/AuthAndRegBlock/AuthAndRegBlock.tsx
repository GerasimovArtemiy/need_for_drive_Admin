import React from 'react'
import MainLogo from './MainLogo'
import cl from './AuthAndRegBlock.module.scss'

const AuthAndRegBlock: React.FC = ({ children }) => {
    return (
        <section className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.header}>
                    <div className={cl.header_logo}>
                        <MainLogo />
                    </div>
                    <h2 className={cl.header_title}>Need for drive</h2>
                </div>
                {children}
            </div>
        </section>
    )
}

export default AuthAndRegBlock
