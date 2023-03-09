import { useEffect, useState } from "react"


const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(() => ({
        width: window.innerWidth,
        height: window.innerHeight
    }))

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: innerHeight
            })
        }
        window.addEventListener("resize", handleResize)
    }, [])
    
  return windowSize
}

export default useWindowSize