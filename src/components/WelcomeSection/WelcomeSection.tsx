import React from 'react'
import cl from './WelcomeSection.module.scss'

const WelcomeSection: React.FC = () => {
    return (
        <div className={cl.welcome_container}>
            <div className={cl.welcome}>
                <h3>Добро пожаловать в Need for car!</h3>
                <p>Для начала работы используйте меню слева</p>
            </div>
        </div>
    )
}

export default WelcomeSection
