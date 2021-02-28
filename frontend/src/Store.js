import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

export default Store
