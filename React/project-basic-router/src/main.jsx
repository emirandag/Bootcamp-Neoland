import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Listado from './pages/Listado/Listado'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='listado' element={<Listado />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<main><p>404 - No existe!</p></main>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
