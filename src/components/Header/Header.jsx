import style from './Header.module.css'
import piwLogo from '../../assets/piw-logo.png';
import BotaoPraCima from '../BotaoPraCima/BotaoPraCima.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faGear,
    faHouse,
    faSearch,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src={piwLogo} alt="" className={style.logo__img}/>
                <h1 className={style.logo__texto}>Piw</h1>
            </div>
           
            <nav>
                <ul className={style.navegacao}>
                    <li>
                        <Link to='/' className={style.navegacaoItem}>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/search' className={style.navegacaoItem}>
                            <FontAwesomeIcon icon={faSearch} />
                            <span>Busca</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className={style.navegacaoItem}>
                            <FontAwesomeIcon icon={faBell} />
                            <span>Notificações</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className={style.navegacaoItem}>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span>Perfil</span>
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className={style.navegacaoItem}>
                            <FontAwesomeIcon icon={faGear} />
                            <span>Configurações</span>
                        </Link>
                    </li>
                </ul>
                <hr />
            </nav>
            <BotaoPraCima />
        </header>
    )
}
