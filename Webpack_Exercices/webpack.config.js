const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
  mode: 'development',
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css'
    })
  ],
  module: {
    rules: [
      {
        test: /.js?$/,          // Testing file extension
        exclude: /node_modules/,  // Do not load files in node_modules folder
        use: {
          loader: 'babel-loader',
          options: {                  // What you want to interpret
            presets: ['react'],
            plugins: ['transform-object-rest-spread']  // Plugin to transpile the ...spread operator
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
}