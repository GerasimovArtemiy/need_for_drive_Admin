import cl from './MyLoader.module.scss'

export default function MyLoader() {
    return (
        <div className={cl.loader_wrap}>
            <div className={cl.loader_ring}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}
