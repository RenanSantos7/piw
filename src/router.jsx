import PaginaPadrao from './pages/PaginaPadrao'
import Home from './pages/Home'
import Perfil from './pages/Perfil/index.jsx'
import users from './json/users.js'
import posts from './json/posts.js'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function routerApp() {

  const postsOrdenados = posts.sort((a, b) => {
    const dateA = new Date(a.published)
    const dateB = new Date(b.published)

    if (dateA > dateB) {
      if (a.replyto == b.id) {
        return 1
      }

      return -1
    }
    if (dateA < dateB) {
      return 1
    }
    return 0
  })

  const [usuarios, setUsuarios] = useState(users)
  const [postagens, setPostagens] = useState(postsOrdenados)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={
            <Home
              usuarios={usuarios}
              postagens={postagens}
            />
          } />

          <Route path='/perfil/:id' element={
            <Perfil
              usuarios={usuarios}
              postagens={postagens}
            />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
