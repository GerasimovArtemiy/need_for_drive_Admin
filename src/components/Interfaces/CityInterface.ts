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
