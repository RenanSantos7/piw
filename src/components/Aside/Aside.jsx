import style from './Aside.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CardBatePapo from '../CardBatePapo/CardBatePapo'

export default function Aside() {
    return (
        <aside className={style.aside}>
            <form className={style.search}>
                <input className={style.search__input} type="search" placeholder="Pesquisar" />
                <button className={style.search__btn} type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>

            <hr />

            <div className={style.batePapo}>
                <h3 className={style.batePapo__title}>Contatos</h3>

                <CardBatePapo
                    key={1}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
                <CardBatePapo
                    key={2}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
                <CardBatePapo
                    key={3}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
                <CardBatePapo
                    key={4}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
                <CardBatePapo
                    key={5}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
                <CardBatePapo
                    key={6}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
                <CardBatePapo
                    key={7}
                    img='../../../public/assets/foto-perfil/015.jpg'
                    nome={'Nome do usuário'}
                />
            </div>
        </aside>
    )
}
