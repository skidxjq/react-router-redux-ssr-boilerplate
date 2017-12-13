import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import merge from 'webpack-merge'
import base from './_base'
import AssetsPlugin from 'assets-webpack-plugin';

const root = process.cwd()

const src = path.join(root, 'src')
const clientSrc = path.join(root, 'client')

const clientInclude = [src, clientSrc]
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

const config = {
  // context: src,
  entry: {
    app: [path.join(clientSrc, 'index.js')],
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
    rules: [{
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
    }]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // Specify the common bundle's name.
    }),
    new ExtractTextPlugin({
      filename: 'css/[name]-[contenthash:8].css',
      // 是否从所有追加的 chunk 中提取样式文件
      allChunks: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
        // 不要去修改函数的名称
      },
      sourceMap: true,
      compress: {
        screw_ie8: true,
        // 压缩选项，去掉对 ie8 的支持
        warnings: false,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new AssetsPlugin({
      path: distSrc,
      filename: 'assets.json'
    }),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
export default merge(base, config)