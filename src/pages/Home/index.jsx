import style from './Home.module.css'
import Card from '../../components/Card/Card.jsx'
import CampoPost from './components/CampoPost.jsx'

export default function Home({ usuarios, postagens }) {

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
                            isReply={postagem.replyto ? true : false}
                        />

                    )
                })}
            </div>
        </>
    )
}
