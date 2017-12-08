import path from 'path'
import webpack from 'webpack'

const root = process.cwd()
const src = path.join(root, 'src')
const clientSrc = path.join(root, 'client')
// const isomorphicSrc = path.join(src, 'isomorphic')

const clientInclude = [clientSrc, src]
export default {
  context: src,
  resolve: {
    mainFields: ['jsnext:main', 'main'],
    extensions: ['.js', '.jsx', '.json', '.web.js', '.css', '.scss'],
    modules: [path.join(root, 'node_modules')]

  },
  module: {
    rules: [{

        test: /\.(js|jsx)$/,
        include: clientInclude,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'images/[path][name]-[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(ttf|woff|eot|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'font/[path][name]-[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: [':data-src', ':src']
          }
        }]
      }
    ]
  }
}