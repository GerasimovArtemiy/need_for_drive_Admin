interface IOrderFilters {
    name: string
    placeholder: string
}

export const orderFilters: IOrderFilters[] = [
    {
        name: 'status',
        placeholder: 'Статус',
    },
    {
        name: 'car',
        placeholder: 'Модель',
    },
    {
        name: 'city',
        placeholder: 'Город',
    },
]
