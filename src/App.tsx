import {
  FC, 
  useMemo, 
  useState
} from 'react'

import { 
  IPokemon, 
  IPokemonFullData, 
  IPokemons 
} from './interfaces'

import AppContext from './providers/AppContext'
import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import Aside from './components/Aside'
import ScrollTop from './components/ScrollTop'

import './App.css'

const App: FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon | {}>({})
  const [pokemons, setPokemons] = useState<IPokemons[]>([])
  const [pokemonFullData, setPokemonFullData] = useState<IPokemonFullData | {}>({})

  const pokemonsData = useMemo(() => ({
    pokemon,
    pokemons,
    pokemonFullData,
    setPokemon,
    setPokemons,
    setPokemonFullData
  }), [pokemon, pokemons, pokemonFullData])

  return (
    <AppContext.Provider
      value={pokemonsData}
    >
      <Header />
      <Main>
        <Section />
        <Aside />
      </Main>
      <ScrollTop />
    </AppContext.Provider>
  )
}

export default App
