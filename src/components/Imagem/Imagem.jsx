import { useEffect, useState } from 'react'
import './Imagem.css'

export default function Imagem({ img }) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    
    function fullscreenON() {
        setIsFullscreen(true)
        document.addEventListener('click', fullscreenOFF)

        document.body.appendChild(sombra)
        sombra.classList.add(sombra)
    }

    function fullscreenOFF() {
        setIsFullscreen(false)
        sombra.classList.remove(`${styles.sombra}`)
        document.removeEventListener('click', fullscreenOFF)
    }

    return (
        <>
            <img
                className={
                    isFullscreen
                        ? `fullscreen`
                        : `imagem`
                }
                src={img}
                alt=""
                onDoubleClick={fullscreenON}
            />
        </>
    )
}
