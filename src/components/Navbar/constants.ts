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
        title: 'Автомобили',
        path: routerPath.carList,
        img: list,
    },
    {
        id: 2,
        title: 'Города',
        path: routerPath.cityList,
        img: list,
    },
    {
        id: 3,
        title: 'Тарифы',
        path: routerPath.rateList,
        img: person,
    },
]
