import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'

import createStore from '../src/store'
// import createHistory from 'history/createHashHistory'
import createHistory from 'history/createMemoryHistory'

import Html from './Html'

const DOCTYPE = `<!DOCTYPE html>`
const isProduction = process.env.NODE_ENV === 'production'
const root = process.cwd()
function renderApp (url, res, store, assets) {
  const context = {}
  const html = renderToString(
    <Html
      title={isProduction ? 'PROD PAGE' : 'DEV PAGE'}
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

  const clientAssets = require('../dist/assets.json')
  const serverAssets = require('../dist/ssr-assets.json')

  clientAssets.manifest.text =
    fs.readFileSync(path.join(root, 'dist', path.basename(clientAssets.manifest.js)), 'utf-8');
  renderApp(req.url, res, store, Object.assign({}, clientAssets, serverAssets))
}

export function renderDevPage (req, res) {
  const history = createHistory()
  const store = createStore(history)

  renderApp(req.url, res, store)
}