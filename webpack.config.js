const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  module: {
   loaders: [{
     test: /\.js$/,
     exclude: /node_modules/,
     loader: "babel",
     include: __dirname,
     query: {
       presets: [ 'es2015', 'react', 'react-hmre' ]
     }
   }]
 },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Primer'
    })
  ]
};
