import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../reducers/types'
import * as apollo from '../apollo'

function* getCities(action) {
  try {
    yield put({ type: types.GET_CITIES_START })

    const result = yield call(apollo.getCities)

    yield put({ type: types.GET_CITIES_END, payload: result?.data?.cities })
  } catch (err) {
    yield put({ type: types.GET_CITIES_FAILURE })
  }
}

function* getPlaces(action) {
  try {
    yield put({ type: types.GET_PLACES_START })

    const result = yield call(apollo.getPlaces, action.payload)

    yield put({ type: types.GET_PLACES_END, payload: result?.data?.places })
  } catch (err) {
    yield put({ type: types.GET_PLACES_FAILURE })
  }
}

export default function* watchList() {
  yield takeLatest(types.GET_CITIES, getCities)
  yield takeLatest(types.GET_PLACES, getPlaces)
}
