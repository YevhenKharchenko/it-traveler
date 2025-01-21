import { clientFetch } from '../clientFetch.js'

export const loginUser = (body) => {
  return clientFetch.post('/user/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/user/register', body)
}

export const logoutUser = () => {
  return clientFetch.get('/user/logout')
}

export const refreshUser = () => {
  return clientFetch.get('/user/refresh')
}
