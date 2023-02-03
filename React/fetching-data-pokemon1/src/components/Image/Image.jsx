import './Image.css'

const Image = ({ url, nombre }) => {
  return (
    <img className='pokeimage' src={url} alt={nombre} />
  )
}

export default Image