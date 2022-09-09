import {
  FC, 
  useEffect, 
  useState,
  useContext
} from 'react'

import _isEmpty from 'lodash/isEmpty' 

import {
  IAxiosPokemon,
  IPokeCard, 
  IPokemon,
  IPokemonFullData
} from '../interfaces'

import AppContext from '../providers/AppContext'
import PokemonApi from '../services/PokemonApi'

import './PokeCard.scss'

const Content: FC<IAxiosPokemon> = ({ data }) => {
  return (
    <>
      <figure
        className="pokecard__figure"
      >
        <img className="pokecard__img" src={data.sprites?.front_default} alt={data.name} />
      </figure>
      <h2 className="pokecard__h2">{`#${data?.id}`}</h2>
      <h3 className="pokecard__h3">{data?.name}</h3>
    </>
  )
}

const PokeCard: FC<IPokeCard> = ({ name, pokemon }) => {
  const { setPokemonFullData } = useContext(AppContext)
  const [pokemonData, setPokemonData] = useState<IPokemonFullData | any>(pokemon)
  
  const onClickHandler = () => {
    setPokemonFullData(pokemonData)
  } 

  useEffect(() => {
    if (name) {
      PokemonApi
        .search(name)
        .then((data: (IPokemon | {})) => setPokemonData(data))
    }
  }, [name])
  
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      className="pokecard"
    >
      {!_isEmpty(pokemonData) && <Content data={pokemonData} />}
    </div>
  )
}

export default PokeCard
