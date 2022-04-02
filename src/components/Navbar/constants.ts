import { pencil, list, order, person } from './NavbarIcons'

interface INavbarItems {
    id: number
    title: string
    path: string
    img: JSX.Element
}

export const navbarItems: INavbarItems[] = [
    {
        id: 0,
        title: 'Карточка авто',
        path: '/',
        img: pencil,
    },
    {
        id: 1,
        title: 'Список авто',
        path: '/',
        img: list,
    },
    {
        id: 2,
        title: 'Заказы',
        path: '/',
        img: order,
    },
    {
        id: 3,
        title: 'Список городов',
        path: '/',
        img: list,
    },
    {
        id: 4,
        title: 'Тарифы',
        path: '/',
        img: person,
    },
]
