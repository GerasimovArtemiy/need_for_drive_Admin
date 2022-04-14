export interface IUser {
    token_type: string
    access_token: string
    expires_in: number
    refresh_token: string
    user_id: string
}

export interface IUserResponseApi {
    data: IUser
}
