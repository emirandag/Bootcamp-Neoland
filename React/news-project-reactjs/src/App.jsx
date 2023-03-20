import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import useRequest from './hooks/useRequest'
import Footer from './components/Footer/Footer'

const App = () => {
  const URL_API = import.meta.env.VITE_APP_MOCK_URL
  const requestApi = useRequest(URL_API)
  return (
    <div className="App">
      <header>
        <h1>NEWS</h1>
        <div className='divider'></div>
        <Navbar />
      </header>
      
      <main>
      <Outlet context={[requestApi]} />
      </main>
      <Footer />
    </div>
  )
}

export default App