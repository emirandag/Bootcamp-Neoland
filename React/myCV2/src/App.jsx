import './App.css'
import Main from './components/Main/Main'
import { CV } from './CV/Cv'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About/About'
import Education from './pages/Education/Education'
import Experience from './pages/Experience/Experience'
import Language from './pages/Language/Language'


const { hero, education, experience, languages, abilities, volunteer} = CV

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main data={hero} />}>
            <Route index element={<About data={hero.aboutMe} />} />
            <Route path="education" element={<Education education={education} />} />
            <Route path="experience" element={<Experience experience={experience} />} />
            <Route path="language" element={<Language languages={languages} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
