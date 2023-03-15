import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import useRequest from './hooks/useRequest'

const App = () => {
  const URL_API = import.meta.env.VITE_APP_MOCK_URL
  const requestApi = useRequest(URL_API)
  return (
    <div className="App">
      <header>
        <h1>NEWS</h1>
      <Navbar />
      </header>
      
      <Outlet context={[requestApi]} />
    </div>
  )
}

export default App