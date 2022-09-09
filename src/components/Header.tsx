import {
  FC,
  ChangeEvent,
  useContext
} from 'react'

import { 
  IPokemon 
} from '../interfaces'

import PokemonApi from '../services/PokemonApi'

import AppContext from '../providers/AppContext'

import './Header.scss'

const Header: FC = () => {
  const { setPokemon } = useContext(AppContext)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    PokemonApi
      .search(event.target.value, true)
      .then((data: (IPokemon | {})) => setPokemon(data))
  }  

  return (
    <header
      className="header"
    >
      <h1
        className="header__h1"
      >
        LISTADO DE POKÉMON
      </h1>
      <input
        className="header__searchbox"
        name="search"
        placeholder="Busca tu pokémon"
        onChange={onChangeHandler}
      />
    </header>
  )
}

export default Header
