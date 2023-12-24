import style from './Perfil.module.css'
import Aside from '../../components/Aside/Aside'
import Main from '../../components/Main/Main'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Perfil({ usuarios, postagens }) {
    
    const parametros = useParams()

    const postagensPerfil = postagens.filter(postagem => postagem.userid == parametros.id)
    const usuarioPerfil = usuarios.find(usuario => usuario.id == parametros.id)

    const [perfil, setPerfil] = useState(usuarioPerfil)

    return (
        <div className={style.perfil}>
            <Header />
            <Main>
                <div className={style.perfil__info}>
                    <h1 className='pageTitle'>{[perfil.name, perfil.surname].join(' ')}</h1>
                    <p className={style.handler}>{perfil.handler}</p>
                    <p className={style.perfil__bio}>{perfil.bio}</p>
                </div>

                <div className={style.cardContainer}>
                    {postagensPerfil.map(postagem => {
                        return (
                            <Card
                                key={postagem.id}
                                usuario={usuarios.find(user => user.id == postagem.userid)}
                                text={postagem.text}
                                picture={postagem.picture}
                                publicacao={postagem.published}
                            />

                        )
                    })}
                </div>
            </Main>
            <Aside usuarios={usuarios} />
        </div>
    )
}
