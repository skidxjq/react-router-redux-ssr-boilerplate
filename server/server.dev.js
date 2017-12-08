import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import devWebpackConfig from '../webpack'
import DashboardPlugin from 'webpack-dashboard/plugin'

export default function devRender(app) {
  const compiler = webpack(devWebpackConfig)
  compiler.apply(new DashboardPlugin())

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