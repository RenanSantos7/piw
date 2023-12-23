import style from './CardBatePapo.module.css'

export default function CardBatePapo({img, nome}) {
    return (
        <div className={style.usuario}>
            <img className={`${style.imagem} circulo`} src={img} alt='' />
            <div className={style.nome}>{nome}</div>
        </div>
    )
}
