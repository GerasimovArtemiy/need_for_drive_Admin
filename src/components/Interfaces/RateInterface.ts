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
    unit: string
    name: string
}
export interface INewRateRequest {
    price: number
    rateTypeId: {
        id?: string
        unit: string
        name: string
    }
}
export interface INewRateType {
    unit: string
    name: string
    id?: string
}
