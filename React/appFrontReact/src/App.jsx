import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Register from './pages/Register'


const App = () => {
    return (
        <div className='App'>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </div>
  )
}

export default App