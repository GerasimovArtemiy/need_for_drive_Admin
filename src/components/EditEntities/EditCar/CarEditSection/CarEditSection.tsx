import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import CarInput from './CarInput'
import Button from '../../../UI/Buttons/Button'
import CarColorInput from './CarColorInput/CarColorInput'
import CarCategoryInput from './CarCategoryInput/CarCategoryInput'
import CarFileInput from './CarFileInput/CarFileInput'
import { useParams } from 'react-router-dom'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { ICarInput, ICarFormValues } from '../../../../hooks/useCarFormInputs'
import { ICar, ICategory } from '../../../Interfaces/CarInterface'
import { carFormValidationSchema } from '../../../../YupValidations/CarFormValidation'
import cl from './CarEditSection.module.scss'

interface ICarEditSectionProps {
    car: ICar
    categories: ICategory[]
    carInputs: ICarInput[]
}

const CarEditSection: React.FC<ICarEditSectionProps> = ({ categories, car, carInputs }) => {
    const [colors, setColors] = useState<string[]>(car.colors)
    const { carId } = useParams()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<ICarFormValues>({
        resolver: yupResolver(carFormValidationSchema),
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<ICarFormValues> = async (data: any) => {
        console.log('sas')
        console.log(data)
    }
    const addColor = (color: string) => {
        if (colors) setColors([...colors, color])
    }
    const deleteColor = (colorValue: string) => {
        const newColors = colors.filter((color) => color !== colorValue)
        setColors(newColors)
    }

    return (
        <section className={cl.carForm}>
            <div className={cl.carForm_container}>
                <form className={cl.carForm_form} onSubmit={handleSubmit(onSubmit)}>
                    <h3>Изменить автомобиль</h3>
                    <div className={cl.input_container}>
                        {carInputs.map((input) => (
                            <CarInput
                                defaultValue={input.defaultValue}
                                key={input.name}
                                name={input.name}
                                placeholder={input.placeholder}
                                label={input.label}
                                type={input.type}
                                register={register}
                                errors={errors}
                                isValid={isValid}
                            />
                        ))}
                        <Controller
                            name={'category'}
                            control={control}
                            defaultValue={
                                carId
                                    ? {
                                          id: car.categoryId.id,
                                          value: car.categoryId.name,
                                          label: car.categoryId.name,
                                      }
                                    : undefined
                            }
                            render={({ field }) => (
                                <CarCategoryInput
                                    errors={errors}
                                    field={field}
                                    placeholder="Категории"
                                    name="Категории"
                                    items={categories}
                                    optionKey="name"
                                    id="category"
                                />
                            )}
                        />
                        <CarFileInput
                            name={'image'}
                            placeholder={'Изображение'}
                            label={'Изображение'}
                            type={'file'}
                            register={register}
                            errors={errors}
                            id={'image'}
                        />
                        <CarColorInput
                            colors={colors}
                            addColor={addColor}
                            deleteColor={deleteColor}
                        />
                    </div>
                    <div className={cl.btn_container}>
                        <Button type="button" title="Назад" className={cl.btn_back}></Button>
                        <Button type="submit" title="Готово" className={cl.btn}></Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CarEditSection
