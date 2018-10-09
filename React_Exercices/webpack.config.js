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
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  }
}