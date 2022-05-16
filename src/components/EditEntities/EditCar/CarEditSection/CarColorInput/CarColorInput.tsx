import React, { useState, useEffect } from 'react'
import Button from '../../../../UI/Buttons/Button'
import cl from './CarColorInput.module.scss'

interface ICarColorInput {
    addColor: (color: string) => void
    deleteColor: (colorValue: string) => void
    colors: string[] | undefined
}

const CarColorInput: React.FC<ICarColorInput> = ({ addColor, deleteColor, colors }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    const handleClick = () => {
        addColor(inputValue)
        setInputValue('')
    }
    useEffect(() => {
        if (inputValue.length < 3) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [inputValue])

    return (
        <div className={cl.input_color}>
            <label htmlFor="color">Цвет</label>
            <div className={cl.input_color_container}>
                <input
                    className={cl.input_color_text}
                    type="text"
                    placeholder="Цвет"
                    name="color"
                    id="color"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                />
                <Button
                    onClick={handleClick}
                    type="button"
                    className={disabled ? cl.input_color_disabled : cl.input_color_btn}
                    title={'Добавить'}
                    disabled={disabled}
                />
            </div>
            {colors &&
                colors.map((color, index) => (
                    <div
                        key={index}
                        className={cl.input_color_items}
                        onClick={() => deleteColor(color)}
                    >
                        {color}
                        <span>Удалить</span>
                    </div>
                ))}
        </div>
    )
}

export default CarColorInput
