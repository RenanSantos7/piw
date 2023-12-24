import style from './PaginaPadrao.module.css'
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Home({usuarios, postagens}) {

    return (
        <div className={style.pageContainer}>
            <Header />
            <main className={style.main}>
                <Outlet/>
            </main>
            <Aside usuarios={usuarios} />
        </div>
    )
}
