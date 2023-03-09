import './Card.css'
import React from 'react'

const Card = ({ character }) => {
  return (
    <div className={`card ${character.types[0].type.name}`} key={character.id}>
      <div className="card-header">
        <div className="card-header-left">
          <h3>
            {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
          </h3>
        </div>
        <div className="card-header-right">
          <h3>{character.stats[0].base_stat}HP</h3>
          <img
            src={`images/icons-types/${character.types[0].type.name}.png`}
            alt={character.types[0].type.name}
          />
        </div>
      </div>
      <div className="card-image">
        <img src={character.sprites.other.dream_world.front_default} alt="" />
      </div>
      <div className="card-info">
        <p className="info-pk">
          Height: {character.height}, Weight: {character.weight}
        </p>
        <div className='pokemon-abilities'>
          <h4>Abilities</h4>
          {character.abilities.map(type => (
                <p>{type.ability.name}</p>
              )
            )
          }
        </div>
        <div className='pokemon-stats'>
          <div>
            <h4>attack</h4>
            <p>{character.stats[1].base_stat}</p>
          </div>
          <div>
            <h4>defense</h4>
            <p>{character.stats[2].base_stat}</p>
          </div>
          <div>
            <h4>speed</h4>
            <p>{character.stats[3].base_stat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card