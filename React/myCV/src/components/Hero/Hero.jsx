import './Hero.css'

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt={hero.name} />
      <div className="card">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <div className="card-hero">
          <span class="material-icons">location_pin</span>
          <p>{hero.city}</p>
        </div>

        <div className="card-hero">
          <span class="material-icons">calendar_today</span>
          <p>{hero.birthDate}</p>
        </div>

        <div className="card-hero">
          <span class="material-icons">email</span>
          <p>
            <a href={`mailto:${hero.email}`}>{hero.email}</a>
          </p>
        </div>
        <div className="card-hero">
          <span class="material-icons">phone</span>
          <p>{hero.phone}</p>
        </div>
        <div className="card-hero">
          <span>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </span>
          <p>
            <a href={hero.github}>Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero