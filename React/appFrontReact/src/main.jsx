import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Home, Gallery, Details, CheckCode, Register, Login } from './pages'
import Protected from './components/Protected/Protected.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkCode' element={<CheckCode />} />
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
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
