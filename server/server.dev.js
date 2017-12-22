import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import devWebpackConfig from '../webpack'

export default function devRender (app) {
  const compiler = webpack(devWebpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: devWebpackConfig.output.publicPath,
    hot: true,
    stats: {
      colors: true
    }
  }))

  app.use(webpackHotMiddleware(compiler))

  return app
}
