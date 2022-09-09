import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
  jest
} from '@jest/globals'

import {
  waitFor,
  render,
  screen,
  RenderResult,
  cleanup,
  fireEvent
} from '@testing-library/react'

import App from '../App'

describe('Test App POKEDEX', () => {
  let containerHTML: HTMLElement

  beforeEach(() => {
    const { container }: RenderResult = render(
      <App />
    )

    containerHTML = container
  })

  afterEach(() => cleanup())

  test('Component initial state, should not exist elements with className "pokecard"', async () => {
    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(0)
  })

  test('Component final state, should exist 10 elements with className "pokecard"', async () => {
    await waitFor(() => screen.getAllByText(/#/))
    
    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(10)
  })

  test('When click More component the "pokecard" className should increase from 10 to 20', async () => {
    await waitFor(() => screen.getAllByText(/#/))

    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(10)
  
    fireEvent.click(screen.getByText(/\+/i))

    await waitFor(() => screen.getByText(/#11/))

    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(20)
  })

  test('Component should show one element with className "pokecard" when we use the search input, and should be present the word "PIKACHU"', async () => {
    fireEvent.change(screen.getByPlaceholderText(/Busca tu pokémon/i), {
      target: {
        value: 'pikachu'
      }
    })

    await waitFor(() => screen.getByText(/#25/i))

    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(1)
    expect(screen.getByText(/PIKACHU/i)).not.toBeNull()
  })

  test('Component should show more than one element with className "pokecard" when we clean the search input', async () => {
    fireEvent.change(screen.getByPlaceholderText(/Busca tu pokémon/i), {
      target: {
        value: ''
      }
    })

    await waitFor(() => screen.getByText(/#10/i))

    expect(containerHTML.querySelectorAll('.pokecard').length).toBe(10)
  })

  test('Global fucntion scrollTop should be called', async () => {
    window.scrollTo = jest.fn()

    fireEvent.click(screen.getByTestId('scrollTo-button'))

    expect(global.scrollTo).toHaveBeenCalled()
  })
})
