import { pencil, list, order, person } from './NavbarIcons'
import { routerPath } from '../../routes/routerPath'

interface INavbarItems {
    id: number
    title: string
    path: string
    img: JSX.Element
}

export const navbarItems: INavbarItems[] = [
    {
        id: 0,
        title: 'Заказы',
        path: routerPath.orderList,
        img: order,
    },
    {
        id: 1,
        title: 'Карточка авто',
        path: '/',
        img: pencil,
    },
    {
        id: 2,
        title: 'Список авто',
        path: '/',
        img: list,
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
