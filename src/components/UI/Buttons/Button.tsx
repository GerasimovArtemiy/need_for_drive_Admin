import React from 'react'

interface IButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined
    title: string
    className: string
}

const Button: React.FC<IButtonProps> = (props) => {
    const { type, title, className } = props

    return (
        <button type={type} className={className}>
            {title}
        </button>
    )
}

export default Button
