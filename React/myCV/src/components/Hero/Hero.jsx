import './Hero.css'

const Hero = ({ hero }) => {
  return (
    <div className='hero'>
      <img src={hero.image} alt="" />
      <div className='card'>
        <h2>{hero.name} {hero.surname}</h2>
        <p>{hero.city}</p>
        <p>{hero.birthDate}</p>
        <p><a href={`mailto:${hero.email}`}>{hero.email}</a></p>
        <p>{hero.phone}</p>
        <p><a href={hero.github}>Github</a></p>
      </div>
    </div>
  )
}

export default Hero