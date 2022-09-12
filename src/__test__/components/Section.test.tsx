import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach
} from '@jest/globals'

import {
  waitFor,
  cleanup,
  screen
} from '@testing-library/react'

import contextSetup from '../../__fixtures__/contextSetup'
import AppContextValuesMock from '../../__mocks__/AppContextValuesMock'
import Section from '../../components/Section'

import fetchResponse from '../../__mocks__/fetchResponse.json'
import searchReponse from '../../__mocks__/searchResponseMock.json'

describe('Test Section component initial state', () => {
  let containerHTML: HTMLElement

  beforeEach(() => {
    containerHTML = contextSetup(Section)
  })

  afterEach(() => {
    cleanup()
  })

  test('should be present a componenet with className "section" and not present a component with className "pokecard"', () => {
    expect(containerHTML.querySelectorAll('.section').length).toBe(1)
    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(0)
  })

  test('setPokemons and setPokemonFullData function called 0 times', () => {
    const { 
      setPokemons,
      setPokemonFullData 
    } = AppContextValuesMock

    expect(setPokemons).toBeCalledTimes(0)
    expect(setPokemonFullData).toBeCalledTimes(0)
  })
})

describe('Test Section component after Api fetch', () => {
  test('setPokemons and setPokemonFullData function called 1 times and have 10 "pokecards"', async () => {
    contextSetup(Section, {}, {
      pokemons: fetchResponse
    })

    const {
      setPokemons,
      setPokemonFullData 
    } = AppContextValuesMock

    await waitFor(() => {
      expect(setPokemons).toBeCalled()
      expect(setPokemonFullData).toBeCalled()
      expect(screen.getAllByText(/#10/i).length).toBe(1)
    })
  })

  test('if pokemons state is fille just show one component "pokecard"', async () => {
    contextSetup(Section, {}, {
      pokemon: searchReponse
    })

    await waitFor(() => expect(screen.getAllByText(/#25/i).length).toBe(1))
  })
})
