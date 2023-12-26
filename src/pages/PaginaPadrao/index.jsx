import styles from './PaginaPadrao.module.css'
import users from '../../json/users.js'
import Aside from '../../components/Aside/Aside.jsx'
import Header from '../../components/Header/Header.jsx'
import { Outlet } from 'react-router'
import { useState } from 'react'

export default function PaginaPadrao() {

    const [usuarios, setUsuarios] = useState(users)

    return (
        <div className={styles.home}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Aside usuarios={usuarios} />
        </div>
    )
}
