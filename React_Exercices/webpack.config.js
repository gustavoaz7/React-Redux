const webpack = require('webpack')
console.log(__dirname);
module.exports = {
  entry: './ex/index.jsx',
  output: {
    path: __dirname + '/public',
    file: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}