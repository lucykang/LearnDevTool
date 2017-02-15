const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};
const PROD = process.env.NODE_ENV === 'production';
/**
 * loaders : They pre-process files that are loaded through require() statements. They are somewhat similar to Gulp pipes in that you can chain loaders together.
 */
module.exports = {
  debug: true,
  devtool: PROD ? 'source-map' : 'eval-source-map', // sets the type of sourcemaps that Webpack will use.
  noInfo: false,
  entry: // PROD ? 'index' :
  [
    'webpack-hot-middleware/client?reload=true', // reloads the page if hot module replacement(HMR) fails.
    'public/index'
  ],
  target: 'web',
  output: {
    path: PROD ? __dirname + '/build' : __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PROD ? './build' : './'
  },
  plugins: PROD ?
  [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ] :
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: [path.join(__dirname, 'public'), path.join(__dirname, 'routes'), path.join(__dirname, 'test')], loaders: ['babel']},
      {
        test: /\.css$/,
        loader: PROD ?
          ExtractTextPlugin.extract('style', 'css?sourceMap'):
          'style!css?sourceMap'
      },
      {
        test: /\.scss$/,
        loader: PROD ?
          ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap') :
          'style!css?sourceMap!resolve-url!sass?sourceMap'
      },
      // The URL loader instructs Webpack to inline our images and fonts as data urls if they are under 100 KB, otherwise serve them as separate files.
      {test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=img/[name].[ext]'},
      {test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, loader: 'url?limit=100000&name=fonts/[name].[ext]'}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './public')]
  },
  resolve: {
    root: [path.resolve('./')]
  }
};