import './Footer.css'

const Footer = ({ url, text}) => {
  return (
    <footer className="footer">
        <h3>
            @emirandag - 2023 - <a href={url}>{text}</a>
        </h3>
    </footer>
  )
}

export default Footer