import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'

const App = () => {
  const dispatch = useDispatch()

  const state = useSelector((state) => state, shallowEqual)

  const { cities, cityLoading, places, placeLoading } = state

  const { getCities, getPlaces } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    getCities()
  }, [])
  return (
    <div className="columns is-centered" style={{ marginTop: '50px' }}>
      <div className="column is-1">
        <div
          className={`select is-rounded is-normal ${
            cityLoading ? 'is-loading' : ''
          }`}
        >
          <select
            onChange={(e) => {
              getPlaces(e.target.value)
            }}
          >
            <option>Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="column is-2">
        <div
          className={`select is-rounded is-normal ${
            placeLoading ? 'is-loading' : ''
          }`}
        >
          <select>
            <option>Select Place</option>
            {places.map((place) => (
              <option key={place.id} value={place.id}>
                {place.place}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default App
