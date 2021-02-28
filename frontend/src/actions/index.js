import * as types from '../reducers/types'

export const getCities = () => {
  return {
    type: types.GET_CITIES,
  }
}

export const getPlaces = (cityId) => {
  return {
    type: types.GET_PLACES,
    payload: cityId,
  }
}
