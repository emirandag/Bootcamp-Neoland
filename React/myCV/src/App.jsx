import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import Language from './components/Language/Language'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Button from './components/IU/Button/Button'
import Abilities from './components/Abilities/Abilities'
import { CV } from './CV/Cv'



const { hero, education, experience, languages, abilities, volunteer} = CV

function App() {

  const [showEducation, setShowEducation] = useState(true)

  return (
    <div className="App">
      <div className="left-cv">
        <Hero hero={hero} />
        <About hero={hero} />
        <Abilities abilities={abilities} />
      </div>
      <div className="right-cv">
        <div className="button">
          <Button onClick={() => setShowEducation(true)} text="Educación" />
          <Button onClick={() => setShowEducation(false)} text="Experiencia" />
        </div>
        <div className="cv-info">
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
          <Language languages={languages} />
        </div>

        
        {/**<More languages={languages} habilities={habilities} /> */}
      </div>
    </div>
  );
}

export default App
