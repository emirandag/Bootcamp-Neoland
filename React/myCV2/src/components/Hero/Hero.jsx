import './Hero.css'
import Avatar from "../Avatar/Avatar"

const Hero = ({ hero }) => {
  return (
    <>
        <div className="hero">
            <Avatar url={hero.image} name={hero.name} />
            <h2>{hero.name} {hero.surname}</h2>
            <div className="hero-info">
                <span className="material-icons">location_pin</span>
                <p>{hero.city}</p>
            </div>
            <div className="hero-info">
                <span className="material-icons">calendar_today</span>
                <p>{hero.birthDate}</p>
            </div>
            <div className="hero-info">
                <span className="material-icons">email</span>
                <p>
                    <a href={`mailto:${hero.email}`}>{hero.email}</a>
                </p>
            </div>
            <div className="hero-info">
                <span className="material-icons">phone</span>
                <p>{hero.phone}</p>
            </div>
        </div>
    </>
  )
}

export default Hero