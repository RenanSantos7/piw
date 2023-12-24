import style from './Home.module.css'
import Aside from '../../components/Aside/Aside.jsx'
import Main from '../../components/Main/Main.jsx'
import Card from '../../components/Card/Card.jsx'
import Header from '../../components/Header/Header.jsx'
import CampoPost from './components/CampoPost.jsx'

export default function Home({usuarios, postagens}) {

    return (
        <div className={style.home}>
            <Header />
            <Main>
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
            </Main>
            <Aside usuarios={usuarios} />
        </div>
    )
}
