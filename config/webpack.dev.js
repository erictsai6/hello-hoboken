// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../static/bundles');
var APP_DIR = path.resolve(__dirname, '../static/jsx');
console.log(BUILD_DIR);
module.exports = merge(commonConfig, {
  entry: [
    // 'react-hot-loader/patch', // activate HMR for React
    APP_DIR + '/app.jsx' // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
});
