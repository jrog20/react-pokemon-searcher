import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({ pokemon, toggleImage }) => (
  <Card.Group itemsPerRow={6}>
    <h1>Pokemon Collection</h1>
    {pokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} toggleImage={toggleImage} />
    ))}
  </Card.Group>
)

export default PokemonCollection
