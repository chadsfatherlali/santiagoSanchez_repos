import {
  describe,
  test,
  expect,
  jest
} from '@jest/globals'

import axios from 'axios'

import PokemonApi from '../../services/PokemonApi'

describe('Test PokemonApi', () => {
  test('fetch should return a result type Array propertie with with 10 elements and previus propertie to be null', async () => {
    const data: any = await PokemonApi.fetch()

    expect(data.previous).toBeNull()
    expect(data.results).not.toBeNull()
    expect(data.results.length).toBe(10)
  })

  test('fetch should return a result type Array propertie with with 20 elements and previus propertie not to be null', async () => {
    const data: any = await PokemonApi.fetch({
      limit: 20,
      offset: 10
    })

    expect(data.previous).not.toBeNull()
    expect(data.results.length).toBe(20)
  })

  test('search should be return and object when the propertie name should be "pikachu"', async () => {
    const data: any = await PokemonApi.search('pikachu')

    expect(data.name).toBe('pikachu')
  })

  test('search with fromSearchBox param to true should call to axios.CancelToken.source()', async () => {
    const cancelToken = axios.CancelToken

    jest
      .spyOn(cancelToken, 'source')

    await PokemonApi.search('pikachu', true)

    expect(axios.CancelToken.source).toBeCalled()
  })
})
