import axios from 'axios'

import Http from '../providers/Http'

import { 
  IFecth,
  IAxiosPokemons,
  IPokemons
} from '../interfaces'

import {
  LIMIT,
  OFFSET
} from '../constants'

/** CANCEL TOKEN AXIOS */
let cancelToken: any

const PokemonApi = {
  /**
   * Fetch Pokemons
   * @param params 
   * @returns 
   */
  fetch: async (params: IFecth = {
    limit: LIMIT,
    offset: OFFSET
  }): Promise<IPokemons | {}> => {
    try {
      const { data }: IAxiosPokemons = await Http.get(`/pokemon?limit=${params.limit}&offset=${params.offset}`)

      return data
    } catch (err: any) {
      return {}
    }
  },
  /**
   * Search Pokemon
   * @param name 
   * @returns 
   */
  search: async (name: string, fromSearchBox: boolean = false): Promise<IPokemons | {}> => {
    try {
      if (!name) {
        return {}
      }

      if (fromSearchBox && cancelToken) {
        cancelToken.cancel('New request from searchbox')
      }

      cancelToken = axios.CancelToken.source()

      const { data }: IAxiosPokemons = await Http.get(`/pokemon/${name.toLowerCase()}`, {
        cancelToken: cancelToken.token
      })

      return data
    } catch (err: any) {
      return {}
    }
  }
}

export default PokemonApi
