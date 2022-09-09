import axios, {
  AxiosInstance
} from 'axios'

const HttpModule = (): AxiosInstance => {
  const request = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
  })

  return request
}

const Http = HttpModule()

export default Http
