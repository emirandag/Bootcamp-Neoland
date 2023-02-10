import './About.css'

const About = ({ hero }) => {
  return (
    <div className='about'>
      <div className='about-header'>
        <h3>About</h3>
      </div>
      <div className='about-card'>
        {hero.aboutMe.map(item => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default About