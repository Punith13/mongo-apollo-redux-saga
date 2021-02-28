import * as types from './types'

const initialState = {
  cities: [],
  cityLoading: false,
  places: [],
  placeLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITIES_START: {
      return { ...state, cityLoading: true }
    }
    case types.GET_CITIES_END: {
      return { ...state, cityLoading: false, cities: action.payload }
    }
    case types.GET_PLACES_START: {
      return { ...state, placeLoading: true, places: initialState.places }
    }
    case types.GET_PLACES_END: {
      return { ...state, placeLoading: false, places: action.payload }
    }
    default:
      return state
  }
}
