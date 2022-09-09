import {
  FC,
  useContext,
  useState
} from 'react'

import {
  LIMIT
} from '../constants'
import { IPokemons } from '../interfaces'

import AppContext from '../providers/AppContext'
import PokemonApi from '../services/PokemonApi'

import './More.scss'

const More: FC = () => {
  const { setPokemons } = useContext(AppContext)
  const [increment, setIncrement] = useState<number>(1)

  const onClickHandler = () => {
    const newIncrement = increment + 1
    
    setIncrement(newIncrement)

    PokemonApi
      .fetch({
        limit: newIncrement * LIMIT,
        offset: 0
      })
      .then((pokemonsData: (IPokemons | {})) => { 
        const { results } = pokemonsData as IPokemons

        setPokemons(results)
      })
  }

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={onClickHandler}
      onKeyDown={onClickHandler} 
      className="more"
    >
      <div className="more__content">
        <div className="more__icon">+</div>
      </div>
    </div>
  )
}

export default More
