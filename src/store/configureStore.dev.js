import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import callAPIMiddleware from './middleware/callAPIMiddleware'
import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux'
import thunk from 'redux-thunk'
import {
  createLogger
} from 'redux-logger'

import * as Reducers from './reducers'

const logger = createLogger()
export default (history) => {
  
  const middleware = [thunk, callAPIMiddleware, routerMiddleware(history), logger]
  const store = createStore(combineReducers({
    ...Reducers,
    router: routerReducer,
  }), applyMiddleware(...middleware))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers')
      const rootReducers = combineReducers({
        ...nextReducers,
        router: routerReducer
      })
    })
  }

  return store
}