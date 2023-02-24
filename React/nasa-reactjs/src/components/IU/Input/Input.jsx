import './Input.css'

const Input = ({ type, handleInput }) => {
  return (
    <input type={type} id="photo-date" onChange={handleInput} />
  )
}

export default Input