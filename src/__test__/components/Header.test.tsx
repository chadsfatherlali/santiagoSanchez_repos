/* eslint-disable react/jsx-no-constructed-context-values */
import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach
} from '@jest/globals'

import {
  screen,
  cleanup,
  fireEvent,
  waitFor
} from '@testing-library/react'

import contextSetup from '../../__fixtures__/contextSetup'
import AppContextValuesMock from '../../__mocks__/AppContextValuesMock'
import Header from '../../components/Header'

describe('Test Header component initial state', () => {
  let containerHTML: HTMLElement

  beforeEach(() => {
    containerHTML = contextSetup(Header)
  })

  afterEach(() => cleanup())

  test('should be present a componenet with className "header", "header__searchbox" and word "LISTADO POKéMON"', () => {
    expect(containerHTML.querySelectorAll('.header').length).toBe(1)
    expect(containerHTML.querySelectorAll('.header__searchbox').length).toBe(1)
  })

  test('setPokemon function should be called 0 times', () => {
    const { setPokemon } = AppContextValuesMock

    expect(setPokemon).toBeCalledTimes(0)
  })
})

describe('Test Header component after Api fetch', () => {
  beforeEach(() => {
    contextSetup(Header)
  })

  afterEach(() => cleanup())

  test('setPokemon function should be called 1 time', async () => {
    const { setPokemon } = AppContextValuesMock

    fireEvent.change(screen.getByPlaceholderText(/Busca tu pokémon/i), {
      target: {
        value: 'pikachu'
      }
    })

    await waitFor(() => expect(setPokemon).toHaveBeenCalledTimes(1))
  })
})
