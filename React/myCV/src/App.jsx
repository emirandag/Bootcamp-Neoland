import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Language from './components/About/Language/Language'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Button from './components/IU/Button/Button'
import More from './components/More/More'
import { CV } from './CV/Cv'


const { hero, education, experience, languages, habilities, volunteer} = CV

function App() {

  const [showEducation, setShowEducation] = useState(true)

  return (
    
      <div className="App">
        
        <Hero hero={hero} />
        <About hero={hero} />
        
        <div className='button'>
          <Button onClick={() => setShowEducation(true)} text="Education" />
          <Button onClick={() => setShowEducation(false)} text="Experience" />
        </div>
        <div>
          {showEducation ? (<Education education={education} />) : (<Experience experience={experience} />) }
        </div>
        <Language languages={languages} />
        
        {/**<More languages={languages} habilities={habilities} /> */}
        
      </div>
    
  );
}

export default App
