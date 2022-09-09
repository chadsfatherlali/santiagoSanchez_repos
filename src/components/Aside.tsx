import {
  FC,
  useContext
} from 'react'

import _isEmpty from 'lodash/isEmpty'

import {
  IAppContext
} from '../interfaces'

import AppContext from '../providers/AppContext'

import './Aside.scss'

const Aside: FC = () => {
  const { pokemonFullData }: IAppContext = useContext(AppContext)

  return (
    <aside
      className="aside"
    >
      {!_isEmpty(pokemonFullData) && (
        <div className="aside__datarail">
          <figure className="aside__figure">
            <img 
              className="aside__img"
              src={pokemonFullData.sprites?.front_default} 
              alt={pokemonFullData.name} 
            />
          </figure>
          <div className="aside__basicinfo">
            <h2 className="aside__h2">{`#${pokemonFullData.id}`}</h2>
            <h3 className="aside__h3">{pokemonFullData.name}</h3>
          </div>
          <div className="aside__item">
            <h4 className="aside__h4">Tipos</h4>
            <div className="aside__slider">
              {pokemonFullData.types.map((type: any) => (
                <span className="aside__slideritems" key={type.slot}>{type.type?.name}</span>
              ))}
            </div>
          </div>
          <div className="aside__item">
            <h4 className="aside__h4">Peso</h4>
            <span className="aside__slideritems--one">{`${pokemonFullData.weight} kg`}</span>
          </div>
          <div className="aside__item">
            <h4 className="aside__h4">Sprites</h4>
            <div className="aside__slider">
              {Object.values(pokemonFullData.sprites!)
                .filter((sprite: any) => typeof sprite === 'string')
                .map((sprite: any, index: number) => (
                  <img key={sprite} className="aside__sprite" src={sprite} alt={`img-${index}`} />
                ))}
            </div>
          </div>
          <div className="aside__item">
            <h4 className="aside__h4">Movimientos</h4>
            <div className="aside__slider">
              {pokemonFullData.moves.map((move: any) => (
                <span className="aside__slideritems" key={move.move?.name}>{move.move?.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Aside
