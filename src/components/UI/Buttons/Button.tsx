import React from 'react'

interface IButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined
    title: string
    className: string
}

const Button: React.FC<IButtonProps> = (props) => {
    const { type, title, className, children } = props

    return (
        <button type={type} className={className}>
            {children} <span>{title}</span>
        </button>
    )
}

export default Button
