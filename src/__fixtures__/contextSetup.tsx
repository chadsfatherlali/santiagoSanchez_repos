/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import { FC } from 'react'

import {
  render,
  RenderResult
} from '@testing-library/react'

import AppContext from '../providers/AppContext'
import AppContextValuesMock from '../__mocks__/AppContextValuesMock'

const contextSetup = (
  Component: FC, 
  properties: any = {},
  contextValues: any = {}
) => {
  const mergedContextValues = {
    ...AppContextValuesMock,
    ...contextValues
  }

  const props = {
    ...properties
  }

  const { container }: RenderResult = render(
    <AppContext.Provider
      value={mergedContextValues}
    >
      <Component 
        {...props}
      />
    </AppContext.Provider>
  )

  return container
}

export default contextSetup
