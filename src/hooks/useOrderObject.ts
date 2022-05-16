import { useCallback } from 'react'

export const useOrderObject = () => {
    const createOrderObject = useCallback((data: any) => {
        const object = {
            cityId: { id: data.city.id },
            pointId: { id: data.point.id },
            carId: { id: data.car.id },
            orderStatusId: { id: data.orderStatus.id },
            color: data.color.value,
            isFullTank: data.tank.value === 'Да',
            isNeedChildChair: data.childChair.value === 'Да',
            isRightWheel: data.rightWheel.value === 'Да',
        }
        return object
    }, [])

    return createOrderObject
}
