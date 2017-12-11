import React from 'react'
import {
  renderToString
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import path from 'path'
const root = process.cwd()

class Html extends React.PureComponent {
  render () {
    const isProduction = process.env.NODE_ENV === 'production'
    const {
      title,
      store,
      assets,
      url,
      context,
      data
    } = this.props

    const {
      manifest,
      app,
      vendor,
      ssr
    } = assets || {}

    // let state = store.getState()
    var htmlCode
    // if (isProduction) {
    //   const ssrRenderJsUrl = path.join(root, 'dist', path.basename(ssr.js))
    //   const Layout = require(ssrRenderJsUrl)
    //   htmlCode = renderToString(
    //     <Provider store={store}>
    //       <StaticRouter location={url} context={context}>
    //         <Layout />
    //       </StaticRouter>
    //     </Provider>
    //   )
    // }
    // const initialState = `window.__INITIAL_STATE = ${JSON.stringify(state)}`
    const initialData = `window.__INITIAL_DATA=${JSON.stringify(data)}`
    // const Layout = isProduction ? require('../../build/prerender') : () => { }

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="stylesheet" href={ssr.css}/>

        </head>
        <body>
          {/* <script dangerouslySetInnerHTML={{ __html: initialState }} /> */}
          <script dangerouslySetInnerHTML={{ __html: initialData }} />
          {/* {isProduction ?
            <div id='root' dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
            :
            <div id='root' />
          } */}
            <div id='root' />
          
          {isProduction && <script dangerouslySetInnerHTML={{ __html: manifest.text }} />}
          {isProduction && <script src={vendor.js} />}
          <script src={isProduction ? app.js : '/dev/app.js'} />
        </body>
      </html>
    )
  }

}

export default Html