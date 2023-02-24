import './Footer.css'

const Footer = ({ url, text}) => {
  return (
    <footer className="footer">
        <h3>
            @lethamburn - 2022 - <a href={url}>{text}</a>
        </h3>
    </footer>
  )
}

export default Footer