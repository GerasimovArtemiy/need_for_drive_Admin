import { useCallback } from 'react'

export const useCarObject = () => {
    const createCarObject = useCallback((data: any) => {
        if (data.path) {
            const object = {
                priceMax: data.priceMax,
                priceMin: data.priceMin,
                name: data.name,
                number: data.number,
                colors: data.colors,
                tank: data.tank,
                thumbnail: data.image.length && {
                    size: data.image[0].size,
                    originalname: data.image[0].name,
                    mimetype: data.image[0].type,
                    path: data.path,
                },

                description: data.description,
                categoryId: data.category.id,
            }
            return object
        } else {
            const object = {
                priceMax: data.priceMax,
                priceMin: data.priceMin,
                name: data.name,
                number: data.number,
                colors: data.colors,
                tank: data.tank,
                description: data.description,
                categoryId: data.category.id,
            }
            return object
        }
    }, [])
    return createCarObject
}
