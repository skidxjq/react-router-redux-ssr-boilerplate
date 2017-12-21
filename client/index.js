import 'babel-polyfill'
import React from 'react'
import {
  render
} from 'react-dom'
import App from './App.jsx'

import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
// Redux
import {
  Provider
} from 'react-redux'
import createStore from '../src/store'

const history = createBrowserHistory()
const store = createStore(history)
const rootEl = document.getElementById('root')

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>
    , rootEl)
}

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const nextApp = require('./App.jsx')
    renderApp(nextApp)
  })
}

renderApp(App)
