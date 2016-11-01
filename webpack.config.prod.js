var path = require('path');
var webpack = require('webpack');

process.env.NODE_ENV = 'production'

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        includes: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'common'),
          path.join(__dirname, 'server'),
        ],
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
    ]
  }
};
