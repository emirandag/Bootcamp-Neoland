import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Details from './pages/Details.jsx'
import Protected from './components/Protected/Protected.jsx'
import CheckCode from './pages/CheckCode.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'> 
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/gallery' element={
            <Protected>
              <Gallery />
            </Protected>} />
          <Route path='/details' element={
            <Protected>
              <Details />
            </Protected>
            } />
            <Route path='/checkCode' element={<CheckCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
