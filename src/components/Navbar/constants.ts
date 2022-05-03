import { pencil, list, order, person, boxes } from './NavbarIcons'
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
        img: person,
    },
    {
        id: 1,
        title: 'Автомобили',
        path: routerPath.carList,
        img: boxes,
    },
    {
        id: 2,
        title: 'Города',
        path: routerPath.cityList,
        img: order,
    },
    {
        id: 3,
        title: 'Тарифы',
        path: routerPath.rateList,
        img: list,
    },
    {
        id: 4,
        title: 'Добавить автомобиль',
        path: routerPath.carAdd,
        img: pencil,
    },
]
