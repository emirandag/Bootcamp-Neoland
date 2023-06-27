import { useEffect, useState } from "react"


const useResize = () => {

    const [ancho, setAncho] = useState(window.innerWidth)

    useEffect(() => {
      
        const handleResize = () => {
            setAncho(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
    

  return { ancho }
}

export default useResize