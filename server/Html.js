import React from 'react'

class Html extends React.PureComponent {
  render () {
    const isProduction = process.env.NODE_ENV === 'production'
    const {
      title,
      store,
      assets,
      url,
      context
    } = this.props

    const {
      manifest,
      app,
      vendor
    } = assets || {}

    let state = store.getState()

    const initialState = `window.__INITIAL_STATE = ${JSON.stringify(state)}`
    const Layout = isProduction ? require('../../build/prerender') : () => { }

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>

        </head>
        <body>
          <div id='root' />
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          <script src='/dev/app.js' />
        </body>
      </html>
    )
  }

}

export default Html