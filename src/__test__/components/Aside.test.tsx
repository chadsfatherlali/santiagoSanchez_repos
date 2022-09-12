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
import Aside from '../../components/Aside'

import searchReponse from '../../__mocks__/searchResponseMock.json'

describe('Test Aside component initial state', () => {
  test('should be present a componenet with className "aside" and components with className "aside__datarail" should not be present', () => {
    const containerHTML = contextSetup(Aside)

    expect(containerHTML.querySelector('.aside')).not.toBeNull()
    expect(containerHTML.querySelectorAll('.pokecard__figure').length).toBe(0)
  })
})

describe('Test Aside component with pokemon data', () => {
  test('should be present a componenet with className "aside" and components with className "aside__datarail" should be present', async () => {
    const containerHTML = contextSetup(Aside, {}, {
      pokemonFullData: searchReponse
    })

    await waitFor(() => expect(screen.getByText(/#25/i)).not.toBeNull())

    expect(containerHTML.querySelector('.aside')).not.toBeNull()
    expect(containerHTML.querySelectorAll('.aside__item').length).toBeGreaterThan(0)
  })
})
