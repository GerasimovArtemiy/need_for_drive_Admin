import React, { MouseEvent } from 'react'

interface IButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined
    title: string
    className: string
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IButtonProps> = (props) => {
    const { type, title, className, children, onClick } = props

    return (
        <button type={type} className={className} onClick={onClick}>
            {children} <span>{title}</span>
        </button>
    )
}

export default Button
