const path = require('path')

/**
 * Configuration for webpack
 */
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

/**
 * Mock API
 */
const MOCK_DATA = require('./mock-data')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8484,
    open: true,

    // Mock API
    before: (app) => {
      app.get('/api/products', (req, res) => {
        res.json(MOCK_DATA.products);
      });
    }
  },
});