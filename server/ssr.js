import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'

import createStore from '../src/store'
// import createHistory from 'history/createHashHistory'
import createHistory from 'history/createMemoryHistory'
import { getNewsList } from './api'
import Html from './Html'
import rClient from './utils/redis'
const DOCTYPE = `<!DOCTYPE html>`
const isProduction = process.env.NODE_ENV === 'production'
const root = process.cwd()
function renderApp (req, res, store, assets) {
  const context = {}
  const rKey = [
    req.url,
    req.headers.cookie,
    JSON.stringify(req.params)
  ].join(':')
  rClient.get(rKey, (err, result) => {
    if (err)
      throw err
    if (result) {
      const htmlStr = renderToString(
        <Html
          title={isProduction ? 'PROD PAGE' : 'DEV PAGE'}
          store={store}
          url={req.url}
          context={context}
          assets={assets}
          data={{ news: JSON.parse(result) }}
        />
      )
      res.send(`${DOCTYPE}${htmlStr}`)
      getNewsList().then(news => {
        if (JSON.stringify(news) !== result) {
          // rClient.set(rKey, news, rClient.print)
          console.log('api not equal to redis cache')
          rClient.set(rKey, JSON.stringify(news), rClient.print)
        }
      })
    } else {
      getNewsList().then(news => {
        const htmlStr = renderToString(
          <Html
            title={isProduction ? 'PROD PAGE' : 'DEV PAGE'}
            store={store}
            url={req.url}
            context={context}
            assets={assets}
            data={{
              news
            }}
          />
        )
        res.send(`${DOCTYPE}${htmlStr}`)
        rClient.set(rKey, JSON.stringify(news), rClient.print)
      })
    }
  })

}

export function renderProdPage (req, res) {
  // const history = createHistory()
  // const store = createStore(history)

  const clientAssets = require('../dist/assets.json')
  const serverAssets = require('../dist/ssr-assets.json')

  clientAssets.manifest.text =
    fs.readFileSync(path.join(root, 'dist', path.basename(clientAssets.manifest.js)), 'utf-8');
  // renderApp(req, res, store, Object.assign({}, clientAssets, serverAssets))
  renderApp(req, res, {}, Object.assign({}, clientAssets, serverAssets))
}

export function renderDevPage (req, res) {
  const history = createHistory()
  const store = createStore(history)

  renderApp(req, res, store)
}