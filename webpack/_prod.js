import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import merge from 'webpack-merge'
import base from './_base'

const root = process.cwd()

const src = path.join(root, 'src')
const clientSrc = path.join(root, 'client')
const distSrc = path.join(root, 'dist')

const vendor = [
  'babel-polyfill',
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'redux',
  'react-router-redux',
  'redux-thunk',
  'classnames'
]

export default {
  context: src,
  entry: {
    app: path.join(clientSrc, 'index.js'),
    vendor
  },
  output: {
    filename: '[name]-[chunkhash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js',
    path: distSrc,
    sourceMapFilename: '[name].map',
    publicPath: '/dist/'    
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize=true',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: ['Android 4', 'last 5 versions', '> 5%', 'iOS 7']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest'] // Specify the common bundle's name.
    }),
  ]
}