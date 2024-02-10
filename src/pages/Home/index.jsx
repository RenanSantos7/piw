import style from './Home.module.css'
import Card from '../../components/Card/Card.jsx'
import CampoPost from './components/CampoPost.jsx'
import { PiwContext } from '../../contexts/context.jsx'
import { useContext } from 'react'

export default function Home() {

    const { usuarios, postagens } = useContext(PiwContext)

    return (
        <>
            <h1 className='pageTitle'>Home</h1>

            <CampoPost />

            <div className={style.cardContainer}>
                {postagens.map(postagem => {
                    return (
                        <Card
                            key={postagem.id}
                            usuario={usuarios.find(user => user.id === postagem.userid)}
                            text={postagem.text}
                            picture={postagem.picture}
                            publicacao={postagem.published}
                            isReply={!!postagem.replyto}
                        />

                    )
                })}
            </div>
        </>
    )
}
