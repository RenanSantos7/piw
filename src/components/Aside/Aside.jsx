import styles from './Aside.module.css'
import CardBatePapo from '../CardBatePapo/CardBatePapo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Aside({ usuarios }) {
    return (
        <aside className={styles.aside}>
            <form className={`${styles.search} boxShadow`}>
                <input className={styles.search__input} type="search" placeholder="Pesquisar" />
                <button className={styles.search__btn} type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>

            <hr />

            <div className={styles.batePapo}>
                <h3 className={styles.batePapo__title}>Contatos</h3>
                <h4 className={styles.batePapo__subtitle}>Clique para conversar</h4>

                {usuarios.map(usuario => {
                    return (
                        <CardBatePapo
                            key={usuario.id}
                            img={`assets/perfil/${usuario.photo}`}
                            nome={`${usuario.name} ${usuario.surname}`}
                        />
                    )
                })
                }
                
                
                
            </div>
        </aside>
    )
}
