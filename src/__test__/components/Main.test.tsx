import {
  describe,
  test,
  expect,
  afterEach,
  beforeEach
} from '@jest/globals'

import {
  render,
  screen,
  RenderResult,
  cleanup
} from '@testing-library/react'

import Main from '../../components/Main'

describe('Test Main component', () => {
  let containerHTML: HTMLElement

  beforeEach(() => {
    const { container }: RenderResult = render(
      <Main>
        <div>Hello</div>
      </Main>
    )

    containerHTML = container
  })

  afterEach(() => cleanup())

  test('Component initial state should it render a componenet with className "main" and should it present a word "Hello"', () => {
    expect(containerHTML.querySelectorAll('.main').length).toBe(1)
    expect(screen.getByText(/Hello/i)).not.toBeNull()
  })
})
