import { useState } from 'react'
import style from './Card.module.css'

export default function Card({ usuario, text, publicacao, picture }) {
    
    const [autor, setAutor] = useState(usuario)
    
    return (
        <article className={style.card}>
            <img className={`circulo ${style.user__img}`} src={`/assets/perfil/${autor.photo}`} alt="" />
            
            <div className={style.post}>
                <div className={style.user__info}>
                    <h3>{autor.name} {autor.surname}</h3>
                    <p>@{autor.handler}</p>
                </div>

                <div className={style.post__conteudo}>                    
                    { text &&
                        <div className={style.post__conteudo__texto}>{text}</div>
                    }
                    
                    { picture &&
                        <img className={style.post__conteudo__imagem} src={`/assets/posts/${picture}`} />
                    }
                </div>

                <div className={style.publicacao}>
                    {publicacao}
                </div>
            </div>
        </article>
    )
}
