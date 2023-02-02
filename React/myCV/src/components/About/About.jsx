import './About.css'

const About = ({ hero }) => {
  return (
    <div>
      <div className='divider'>

      </div>
      <h3>About</h3>
      <div className='about card'>
      {hero.aboutMe.map(item => {
        return (
          <div key={JSON.stringify.toString(item)}>
            <p>{item.info}</p>
          </div>
        )
      })}
      </div>
    </div>
    
  )
}

export default About