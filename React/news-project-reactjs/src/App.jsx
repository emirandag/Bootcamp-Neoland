import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import useRequest from './hooks/useRequest'

const App = () => {
  const URL_API = import.meta.env.VITE_APP_MOCK_URL
  const requestApi = useRequest(URL_API)
  return (
    <div className="App">
      <Navbar />
      <Outlet context={[requestApi]} />
    </div>
  )
}

export default App