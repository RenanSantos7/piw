import style from './Home.module.css'
import Aside from '../../components/Aside/Aside'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import users from '../../json/users.js'
import posts from '../../json/posts.js'
import { useEffect, useState } from 'react'

export default function Home() {

    const [usuarios, setUsuarios] = useState(users)
    const [postagens, setPostagens] = useState(posts)

    return (
        <div className={style.home}>
            <Header />
            <main>
                <h1 className='pageTitle'>Home</h1>

                <div className={style.cardContainer}>
                    {postagens.map(postagem => {
                        return (
                            <Card
                                key={postagem.id}
                                usuario={usuarios.find(user => user.id === postagem.userid)}
                                text={postagem.text}
                                picture={postagem.picture}
                                publicacao={postagem.published}
                            />

                        )
                    })}
                </div>
            </main>
            <Aside />
        </div>
    )
}
