import { useState } from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat, faHeart as faHeartFill } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart as faHeartOutlined } from '@fortawesome/free-regular-svg-icons'
////import Imagem from '../Imagem/Imagem'

export default function Card({ usuario, text, publicacao, picture, isReply }) {
    
    const [autor, setAutor] = useState(usuario)

    const [curtida, setCurtida] = useState(false)
    
    return (
        <article className={style.card}>
            <div className={isReply ? `${style.reply}` : ''}></div>
            <Link to={`/perfil/${autor.id}`}>
                <img
                    className={`circulo ${style.user__img}`}
                    src={`/assets/perfil/${autor.photo}`}
                    alt=""
                />
            </Link>
            
            <div className={style.post}>
                <Link to={`/perfil/${autor.id}`} className={style.user__info}>
                    <h3>{autor.name} {autor.surname}</h3>
                    <p>@{autor.handler}</p>
                </Link>

                <div className={style.post__conteudo}>                    
                    { text &&
                        <div className={style.post__conteudo__texto}>{text}</div>
                    }
                    
                    { picture &&
                        <img src={picture} alt='' className={style.post__conteudo__imagem} />
                    }
                </div>

                <div className={style.inferior}>
                    <div className={style.publicacao}>
                        {publicacao}
                    </div>

                    <div className={style.acoes}>
                        <FontAwesomeIcon
                            className={style.acoes__item}
                            icon={faRepeat}
                        />
                        
                        <FontAwesomeIcon
                            className={style.acoes__item}
                            icon={faComment}
                        />
                        
                        <FontAwesomeIcon
                            className={style.acoes__item}
                            icon={curtida ? faHeartFill : faHeartOutlined}
                            onClick={() => setCurtida(!curtida)}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}
