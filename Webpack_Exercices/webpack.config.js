const webpack = require('webpack')

module.exports = {
  entry: './ex/index.js',         // Entry point (initial file)
  output: {
    path: __dirname + '/public',  // Path for output 
    filename: './bundle.js'       // Output file
  },
  devServer: {                    // Webpack server
    port: 8080,
    contentBase: './public'       // Same path as bundle.js file
  },
  module: {
    loaders: [
      {
        test: /.js?$/,          // Testing file extension
        loader: 'babel-loader',
        exclude: /node_modules/,  // Do not load files in node_modules folder
        query: {                  // What you want to interpret
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']  // Plugin to transpile the ...spread operator
        } 
      }
    ]
  }
}