import style from './Main.module.css'

export default function Main(props) {
    return (
        <main className={style.main}>
            {props.children}
        </main>
    )
}
