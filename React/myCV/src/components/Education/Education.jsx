
import './Education.css'

const Education = ({ education }) => {
  return (
    <>
    <h3>Education</h3>
      
      <div className='education card'>
      
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className='name'>{item.name}</p>
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