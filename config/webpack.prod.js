// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./webpack.common');

var BUILD_DIR = resolve(__dirname, '../static/bundles');
var APP_DIR = resolve(__dirname, '../static/jsx');

module.exports = merge(commonConfig, {
  entry: APP_DIR + '/app.jsx',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  plugins: [],
});
