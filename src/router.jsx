import PaginaPadrao from './pages/PaginaPadrao'
import Home from './pages/Home'
import Perfil from './pages/Perfil/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function routerApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home/>} />
          <Route path='/perfil/:id' element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
