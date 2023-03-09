import Component from "./components/Component/Component"
import { useCounter } from "./hooks/useCounter/useCounter"
import useToggle from "./hooks/useToggle/useToggle"
import useWindowSize from "./hooks/useWindowSize/useWindowSize"

const App = () => {

    const { count, handleIncrement, handleDecrement } = useCounter(0)
    const [toggleState, handleToggle] = useToggle()
    const { width, height } = useWindowSize()

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>

            <Component />

            <h3>Toggle: {toggleState.toString()}</h3>
            <button onClick={handleToggle}>Toggle</button>

            <h1>La ventana mide</h1>
            <h2>Ancho: {width}</h2>
            <h2>Alto: {height}</h2>
        </>
    )
}

export default App