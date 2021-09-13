import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({ pokemon, toggleImage }) => {
  const { name, hp, sprites, isClicked } = pokemon
  const url = isClicked ? sprites.back : sprites.front

  return (
    <Card>
      <div onClick={() => toggleImage(pokemon)}>
        <div className="image">
          <img src={url} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
