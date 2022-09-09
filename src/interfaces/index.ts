export interface IFecth {
  limit: number
  offset: number
}

export interface IType {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface ITypes {
  [index: number]: IType
}

export interface IMove {
  move: {
    name: string
    url: string
  }
}

export interface IMoves {
  [index: number]: IMove
}

export interface ISprites {
  back_default: string | undefined 
  back_female: string | undefined
  back_shiny: string | undefined
  back_shiny_female: string | undefined
  front_default: string | undefined
  front_female: string | undefined
  front_shiny: string | undefined
  front_shiny_female: string | undefined
}

export interface IPokemon {
  id: number
  name: string
  weight: number
  types: Array<ITypes>
  sprites: ISprites
  moves: Array<IMoves>
}

export interface IResult {
  name: string
  url: string
}

export interface IResults {
  [index: number]: {
    name: string,
    url: string
  }
}

export interface IPokemons {
  count: number
  next: string
  previous: string | undefined
  results: IResults
}

export interface IPokemonFullData {
  id: number
  name: string
  weight: number
  types: Array<ITypes>
  sprites: ISprites
  moves: Array<IMoves>
}

export interface IPokeCard {
  name?: string
  url?: string
  pokemon?: {}
}

/** APP CONTEXT INTERFACE */
export interface IAppContext {
  pokemon: IPokemon
  pokemons: Array<IPokemons>
  pokemonFullData: IPokemonFullData
  setPokemon: () => void
  setPokemons: () => void
  setPokemonFullData: () => void
}

/** AXIOS RESPONSE INTERFACES */
export interface IAxiosPokemons {
  data: IPokemons
}

export interface IAxiosPokemon {
  data: IPokemon
}
