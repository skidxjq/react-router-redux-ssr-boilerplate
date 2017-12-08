import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'

import createStore from '../src/store'
// import createHistory from 'history/createHashHistory'
import createHistory from 'history/createMemoryHistory'

import Html from './Html'

const DOCTYPE = `<!DOCTYPE html>`
function renderApp (url, res, store, assets) {
  const context = {}
  const html = renderToString(
    <Html
      title='SPA page'
      store={store}
      url={url}
      context={context}
      assets={assets}
    />
  )

  res.send(`${DOCTYPE}${html}`)
}

export function renderProdPage (req, res) {
  const history = createHistory()
  const store = createStore(history)

  const assets = require('../../dist/assets.json')

  renderApp(req.url, res, store, assets)
}

export function renderDevPage (req, res) {
  const history = createHistory()
  const store = createStore(history)

  renderApp(req.url, res, store)
}