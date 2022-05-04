export interface ICity {
    updatedAt: number
    createdAt: number
    name: string
    id: string
}
export interface ICitiesResponse {
    data: ICity[]
    count: number
}
export interface ICityResponse {
    data: ICity
}
export interface IPoint {
    address: string
    name: string
    cityId: ICity
    id: string
}
