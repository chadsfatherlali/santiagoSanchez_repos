import {
  describe,
  test,
  expect
} from '@jest/globals'

import {
  screen,
  waitFor
} from '@testing-library/react'

import contextSetup from '../../__fixtures__/contextSetup'
import Pokecard from '../../components/PokeCard'

import searchReponse from '../../__mocks__/searchResponseMock.json'

describe('Test Pokecard component initial state', () => {
  test('should be present a componenet with className "pokecard" and a componenet with className "pokecard__figure" should not be present', () => {
    const containerHTML = contextSetup(Pokecard)

    expect(containerHTML.querySelector('.pokecard')).not.toBeNull()
    expect(containerHTML.querySelector('.pokecard__figure')).toBeNull()
  })
})

describe('Test Pokecard componenet with name and pokemons properties', () => {
  test('component with "name" propertie should be show a "pikachu" text', async () => {
    contextSetup(Pokecard, {
      name: 'pikachu'
    })

    await waitFor(() => expect(screen.getByText(/Pikachu/i)).not.toBeNull())
  })

  test('component with "pokemon" propertie should be show a "pikachu" text', async () => {
    contextSetup(Pokecard, {
      pokemon: searchReponse
    })

    await waitFor(() => expect(screen.getByText(/Pikachu/i)).not.toBeNull())
  })
})
