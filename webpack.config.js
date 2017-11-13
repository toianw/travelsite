const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js", // start bundle from here
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"), // create bundled file here (needs absolute path)
    filename: "App.js" // name of bundled file
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node-modules/
      }
    ]
  }
}
