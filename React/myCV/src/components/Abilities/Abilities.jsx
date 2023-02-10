import './Abilities.css'

const Abilities = ({ abilities }) => {
  return (
    <div className='abilities'>
      <h3>Habilidades</h3>
      <ul>
        {abilities.map((ability) => {
          return (
            <li key={JSON.stringify(ability)}><p>{ability}</p></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Abilities