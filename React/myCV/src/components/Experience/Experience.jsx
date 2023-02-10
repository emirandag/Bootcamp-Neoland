import './Experience.css'

const Experience = ({ experience }) => {
  return (
      <>
      <div className='experience-header'>
        <span className="material-icons">work</span>
        <h3>Experiencia</h3>
      </div>
      
      <div className="experience-card">
          {experience.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <h4 className='name'><span className="material-icons">
folder_open
</span>{item.name}</h4>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
            )
          })
          }
      </div> 
      </>
  )
      
      
}

export default Experience