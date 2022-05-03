import React, { useRef, MouseEvent } from 'react'
import Button from '../../../../UI/Buttons/Button'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ICarFormValues } from '../../../../../hooks/useCarFormInputs'
import cl from './CarFileInput.module.scss'

interface IFileInputProps {
    id: string
    name: 'image'
    label: string
    placeholder: string
    type: string
    register: UseFormRegister<ICarFormValues>
    errors: FieldErrors
}

const CarFileInput: React.FC<IFileInputProps> = (props) => {
    const { name, label, type, register, errors, placeholder, id } = props
    const { ref, ...inputProps } = register(name)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        inputRef?.current?.click()
    }

    return (
        <div className={cl.fileInput}>
            <label className={cl.fileInput_label} htmlFor={name}>
                {label}
            </label>
            <div className={cl.input_container}>
                <input
                    {...inputProps}
                    id={id}
                    className={cl.input}
                    name={name}
                    placeholder={placeholder}
                    ref={(e: any) => {
                        ref(e)
                        inputRef.current = e
                    }}
                    autoComplete="off"
                    type={type}
                />
                <Button
                    onClick={(e) => handleClick(e)}
                    type="button"
                    title="Фото"
                    className={cl.input_btn}
                />
            </div>
            {errors.image && <span className={cl.error}>{errors.image.message}</span>}
        </div>
    )
}
export default CarFileInput
