var webpack = require('webpack');

console.log(__dirname)

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/js', 
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
  
}