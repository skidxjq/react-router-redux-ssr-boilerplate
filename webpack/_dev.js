import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import autoprefixer from  'autoprefixer'
import base from './_base'
const root = process.cwd()
const clientEntry = path.join(root, 'client/index.js')
const config = {
  entry: {
    app: [
      'webpack-hot-middleware/client?noInfo=false',
      'react-hot-loader/patch',
      clientEntry
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    publicPath: '/dev/',
    chunkFilename: '[name]-[chunkhash:8].js',
    sourceMapFilename: '[name].map',
  },
  module: {
    rules: [{
      test: /\.(css|scss|sass)$/,
      use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              autoprefixer({
                browsers: ['android >= 4', '> 5%', 'ios >= 7']
              })
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }

      ]
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}

export default merge(base, config)