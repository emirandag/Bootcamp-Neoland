import './Card.css'
const Card = ({ character }) => {
  return (
    <div className={`card ${character.type}`} key={character.number}>
        <div className="card-header">
            <div className="card-header-left">
              <h3>
                {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
              </h3>
            </div>
            <div className="card-header-right">
              <h3>{character.hp}HP</h3>
              <img
                src={`images/icons-types/${character.type}.png`}
                alt={character.type}
              />
            </div>
        </div>
        <div className="card-image">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="card-info">
          <p className="info-pk">
            Height: {character.height}, Weight: {character.weight}
          </p>
          <div className="pokemon-abilities">
            <h4>Abilities</h4>
            <p>{character.ability}</p>
          </div>
          <div className="pokemon-stats">
            <div>
              <h4>attack</h4>
              <p>{character.attack}</p>
            </div>
            <div>
              <h4>defense</h4>
              <p>{character.defense}</p>
            </div>
            <div>
              <h4>speed</h4>
              <p>{character.speed}</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Card