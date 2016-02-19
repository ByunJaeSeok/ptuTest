var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel',
      }, {
        test: /\.css$/, loaders: ['style', 'css'],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url?limit=10000',
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
