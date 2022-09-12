/* eslint-disable react-hooks/rules-of-hooks */
import {
  jest
} from '@jest/globals'

const useStateMock = (useState: any) => {
  return [
    useState, 
    jest.fn()
  ]
}

const [pokemon, setPokemon] = useStateMock({})
const [pokemons, setPokemons] = useStateMock([])
const [pokemonFullData, setPokemonFullData] = useStateMock({})

const AppContextValuesMock = {
  pokemon,
  pokemons,
  pokemonFullData,
  setPokemon,
  setPokemons,
  setPokemonFullData
} 

export default AppContextValuesMock
