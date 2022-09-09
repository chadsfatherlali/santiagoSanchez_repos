import {
  FC, 
  useContext, 
  useEffect
} from 'react'

import _isEmpty from 'lodash/isEmpty'

import {
  IPokeCard,
  IPokemons,
  IResults,
  IPokemon
} from '../interfaces'

import AppContext from '../providers/AppContext'
import PokemonApi from '../services/PokemonApi'
import PokeCard from './PokeCard'
import More from './More'

import './Section.scss'

const Section: FC = () => {
  const {
    pokemon, 
    pokemons,
    setPokemons,
    setPokemonFullData
  } = useContext(AppContext)

  useEffect(() => {
    PokemonApi
      .fetch()
      .then((pokemonsData: (IPokemons | {})) => {
        const { results } = pokemonsData as IPokemons

        setPokemons(results)

        PokemonApi
          .search((results as unknown as IResults)[0].name)
          .then((pokemonData: (IPokemon | {})) => {
            setPokemonFullData(pokemonData)
          })
      })
  }, [setPokemons, setPokemonFullData])

  return (
    <section
      className="section"
    >
      {!_isEmpty(pokemon) && <PokeCard pokemon={pokemon} />}
      {_isEmpty(pokemon) 
      && !_isEmpty(pokemons) && pokemons.map((item: IPokeCard) => (
        <PokeCard
          key={item.name}
          name={item.name}
        />
      ))}
      <More />
    </section>
  )
}

export default Section
