const path = require('path')

/**
 * Configuration for webpack
 */
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

/**
 * Mock API
 */
const PRODUCTS_LIST = require('./products')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8484,

    // Mock API
    before: (app) => {
      app.get('/api/products', (req, res) => {
        res.json(PRODUCTS_LIST);
      });
    }
  },
});