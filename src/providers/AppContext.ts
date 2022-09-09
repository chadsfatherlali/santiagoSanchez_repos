import { 
  createContext
} from 'react'

import { 
  IAppContext 
} from '../interfaces'

const AppContext = createContext<IAppContext | any>(null)

export default AppContext
