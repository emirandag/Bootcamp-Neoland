import './Language.css'

const Language = ({ languages }) => {
  return (
    <>
        <h3>Languages</h3>
        <div className='language card'>
            {languages.map(item => {
                return (
                    <div key={JSON.stringify.toString(item)}>
                        <p><strong>{item.language}</strong></p>
                        <p>{item.wrlevel}</p>
                        <p>{item.splevel}</p>
                    </div>
                )
            })}
        </div>
    </>
    
  )
}

export default Language