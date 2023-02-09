
import './Education.css'

const Education = ({ education }) => {
  return (
    <>
    <div className='education-header'>
      <span class="material-icons">school</span>
      <h3> Educación</h3>
    </div>
    <div className='education-card'>

      {education.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            
            <h4 className='name'><span class="material-icons">
book
</span>{item.name}</h4>
            <p>{item.where}</p>
            <p>{item.date}</p>
          </div>
        )
      })}
    </div>
    </>


  )
}

export default Education