import styles from './Perfil.module.css'
import Card from '../../components/Card/Card'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Perfil({ usuarios, postagens }) {

    const parametros = useParams()

    const postagensPerfil = postagens.filter(postagem => postagem.userid == parametros.id)
    const usuarioPerfil = usuarios.find(usuario => usuario.id == parametros.id)

    const [perfil, setPerfil] = useState(usuarioPerfil)

    return (
        <>
            <div className={styles.perfil__info}>
                <h1 className='pageTitle'>{[perfil.name, perfil.surname].join(' ')}</h1>
                <p className={styles.handler}>{perfil.handler}</p>
                <p className={styles.perfil__bio}>{perfil.bio}</p>
            </div>

            <div className={styles.cardContainer}>
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
        </>
    )
}
