export interface IRate {
    price: number
    rateTypeId: {
        unit: string
        name: string
        id: string
    }
    id: string
}

export interface INewRate {
    price: number
    rateTypeId: {
        unit: string
        name: string
    }
}
