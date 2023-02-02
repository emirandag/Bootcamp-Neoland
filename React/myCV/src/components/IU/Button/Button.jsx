import './Button.css'

const Button = ({ onClick, text }) => {
  return (
    <button className="custom-btn btn-4" onClick={onClick}>{text}</button>
  )
}

export default Button