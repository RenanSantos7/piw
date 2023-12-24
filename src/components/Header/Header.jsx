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
    faTicket
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

                <div>
                    <div className={style.convites}>
                        <FontAwesomeIcon icon={faTicket} />
                        <span>5 convites</span>
                    </div>
                </div>

                <hr />
                <ul className={style.outrosLinks}>
                    <li className={style.outrosLinks__item}>
                        <a href='#'>Termos de uso</a>
                    </li>
                    
                    <li className={style.outrosLinks__item}>
                        <a href='#'>Ajuda</a>
                    </li>
                    
                    <li className={style.outrosLinks__item}>
                        <a href='https://github.com/renansantos7/piw'>Piw no Github</a>
                    </li>
                </ul>
               
            </nav>
            <BotaoPraCima />
        </header>
    )
}
