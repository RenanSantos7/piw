import { useState } from 'react'
import style from './CampoPost.module.css'

export default function CampoPost() {
    const [mostraBotao, setMostraBotao] = useState(false)

    return (
        <form className={`${style.campoPost} boxShadow`}>
            <textarea
                className={style.campoPost__input}
                placeholder='No que você está pensando?'
                onClick={() => { setMostraBotao(true) }}
                onBlur={() => { setMostraBotao(false) }}
            ></textarea>
            <button
                className={`${style.campoPost__btn}
                    ${mostraBotao ? '' : 'oculto' }
                `}
            >Postar</button>
        </form>
    )
}
