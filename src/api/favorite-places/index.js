import { clientFetch } from '../clientFetch.js'

const BASE_PLACES_URL = '/points'

export const getFavoritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL)
}

export const addFavoritePlace = (bosy) => {
  return clientFetch.post(BASE_PLACES_URL, body)
}

export const FavoritePlace = (body) => {
  return clientFetch.put(BASE_PLACES_URL, body)
}

export const deleteFavoritePlace = (body) => {
  return clientFetch.delete(BASE_PLACES_URL, body)
}
