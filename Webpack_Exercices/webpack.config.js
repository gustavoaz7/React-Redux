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
  }
}