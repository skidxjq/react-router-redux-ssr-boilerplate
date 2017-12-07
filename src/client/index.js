import App from './App'
import {
  render
} from 'react-dom'
import App from './App.jsx'

import Provider from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createHashHistory } from 'history'
//Redux
import {
  Provider
} from 'react-redux'
import createStore from '../isomorphic/store'

const history = createHashHistory()
const store = createStore(history)
const rootEl = document.getElementById('root')

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>
  )
}

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const nextApp = require('./App.jsx')
    renderApp(nextApp)
  })
}

renderApp(App)