import './App.css'
import Countdown from './components/Countdown/Countdown'
import DigitalClock from './components/DigitalClock/DigitalClock'
import Stopwatch from './components/Stopwatch/Stopwatch'


const App = () => {

  return (
    <div className="App">
      <DigitalClock />
      <Countdown />
      <Stopwatch />
    </div>
  )
}

export default App
