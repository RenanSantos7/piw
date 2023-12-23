import style from './BotaoPraCima.module.css'
import seta from './arrow_upward_black_24dp.svg'

// ver https://www.npmjs.com/package/react-scroll

export default function BotaoPraCima() {
    function rolarPraCima() {
        window.scrollTo({top: 0})
    }

    return (
        <button
            className={style.botaoPraCima}
            aria-label='seta para cima'
            onClick={rolarPraCima}
        >
            <img src={seta} alt='' />
        </button>
    )
}
