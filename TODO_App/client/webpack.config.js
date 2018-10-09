const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/index.jsx',
    'font-awesome/scss/font-awesome.scss'
  ],
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css'
    })
  ],
  module: {
    rules: [{
      test: /.js[x]?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    }, {
      test: /\.css$|.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      })
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      test: /font-awesome\.config\.js/,
      use: [
        { loader: 'style-loader' },
        { loader: 'font-awesome-loader' }
      ]
    },]
  }
}