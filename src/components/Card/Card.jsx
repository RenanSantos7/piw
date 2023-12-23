import style from './Card.module.css'

export default function Card() {
    return (
        <article className={style.card}>
            <img className={`circulo ${style.user__img}`} src="../../../public/assets/foto-perfil/005.jpg" alt="" />
            
            <div className={style.post}>
                <div className={style.user__info}>
                    <h3>Nome do usuario</h3>
                    <p>@usuario.piw.social</p>
                </div>

                <div className={style.post__conteudo}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
            </div>
        </article>
    )
}
