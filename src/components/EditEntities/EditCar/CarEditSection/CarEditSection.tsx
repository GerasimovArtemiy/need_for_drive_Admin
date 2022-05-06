import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState, useEffect } from 'react'
import CarInput from './CarInput'
import Button from '../../../UI/Buttons/Button'
import CarColorInput from './CarColorInput/CarColorInput'
import CarCategoryInput from './CarCategoryInput/CarCategoryInput'
import CarFileInput from './CarFileInput/CarFileInput'
import { postCar, putCar } from '../../../../store/Slices/CarsSlice'
import { useAppDispatch } from '../../../../hooks/redux-hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { ICarInput, ICarFormValues } from '../../../../hooks/useCarFormInputs'
import { ICar, ICategory } from '../../../Interfaces/CarInterface'
import {
    carEditValidationSchema,
    carAddValidationSchema,
} from '../../../../YupValidations/CarFormValidation'
import { useConverterFiles } from '../../../../hooks/useConverterFiles'
import { useCarObject } from '../../../../hooks/useCarObject'
import cl from './CarEditSection.module.scss'
import GreenModal from '../../../UI/GreenModal/GreenModal'

interface ICarEditSectionProps {
    car: ICar
    categories: ICategory[]
    carInputs: ICarInput[]
}

const CarEditSection: React.FC<ICarEditSectionProps> = ({ categories, car, carInputs }) => {
    const [colors, setColors] = useState<string[] | undefined>(car.colors)
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [isEditPage, setIsEditPage] = useState<boolean>(false)
    const { carId } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const converterFile = useConverterFiles()
    const createCarObject = useCarObject()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<ICarFormValues>({
        resolver: yupResolver(carId ? carEditValidationSchema : carAddValidationSchema),
        mode: 'onBlur',
    })

    useEffect(() => {
        if (carId) {
            setIsEditPage(true)
        } else {
            setIsEditPage(false)
        }
    }, [])

    const onSubmit: SubmitHandler<ICarFormValues> = async (data: any) => {
        if (data.image.length) {
            const path = await converterFile(data.image[0])
            const newCar = createCarObject({
                ...data,
                colors: colors,
                path: path,
            })
            if (isEditPage) {
                dispatch(putCar({ carId: carId!, car: newCar }))
            } else {
                dispatch(postCar(newCar))
                setActiveModal(true)
            }
        } else {
            const newCar = createCarObject({
                ...data,
                colors: colors,
            })
            if (isEditPage) {
                dispatch(putCar({ carId: carId!, car: newCar }))
            } else {
                dispatch(postCar(newCar))
                setActiveModal(true)
            }
        }
    }

    const addColor = (color: string) => {
        if (colors) {
            setColors([...colors, color])
        } else {
            setColors([color])
        }
    }
    const deleteColor = (colorValue: string) => {
        if (colors !== undefined) {
            const newColors = colors.filter((color) => color !== colorValue)
            setColors(newColors)
        }
    }

    return (
        <section className={cl.carForm}>
            <div className={cl.carForm_container}>
                <form className={cl.carForm_form} onSubmit={handleSubmit(onSubmit)}>
                    <h3>{carId ? 'Изменить автомобиль' : 'Добавить автомобиль'}</h3>
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
                            name="category"
                            control={control}
                            defaultValue={
                                carId && car.categoryId
                                    ? {
                                          id: car.categoryId?.id,
                                          value: car.categoryId?.name,
                                          label: car.categoryId?.name,
                                      }
                                    : {
                                          id: '0',
                                          value: 'Не известно',
                                          label: 'Не известно',
                                      }
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
                        <Button
                            type="button"
                            title="Назад"
                            className={cl.btn_back}
                            onClick={() => navigate(-1)}
                        ></Button>
                        <Button
                            type="submit"
                            title={carId ? 'Готово' : 'Добавить'}
                            className={cl.btn}
                        ></Button>
                    </div>
                </form>
                <GreenModal active={activeModal} setActive={setActiveModal} />
            </div>
        </section>
    )
}

export default CarEditSection
