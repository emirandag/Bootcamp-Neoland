import './Avatar.css'
const Avatar = ({ url, name }) => {
  return (
    <img className="avatar" src={url} alt={name} />
  )
}

export default Avatar