import './Main.css'
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Main = ( {data} ) => {

  return (
    <main className="main">
        <div className="cv-left">
           <Hero hero={data} />
        </div>
        <div className="cv-right">
            <Navbar />
            <div className="container">
              <Outlet />
            </div>
        </div>
    </main>
  )
}

export default Main