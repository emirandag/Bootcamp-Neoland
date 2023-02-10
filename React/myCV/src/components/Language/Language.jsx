import './Language.css'

const Language = ({ languages }) => {
  return (
    <>
        <div className='language-header'>
            <span className="material-icons">language</span>
            <h3>Idiomas</h3>
        </div>
        
        <div className='language-card'>
            {languages.map(item => {
                return (
                    <div key={JSON.stringify(item)}>
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