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

import * as Reducers from './reducers'

export default (history) => {
  const middleware = [thunk, callAPIMiddleware, routerMiddleware(history)]
  const store = createStore(combineReducers({
    ...Reducers,
    router: routerReducer
  }), applyMiddleware(...middleware))

  return store
}
