const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Whee - The most definitive shape store in the world',
      mobile: true,
      lang: 'en-US',
      links: [
        'https://fonts.googleapis.com/css?family=Pacifico',
        'https://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic,700italic',
      ],
      appMountIds: ['app'],
      favicon: 'favicon.ico'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader',
          'vue-svg-inline-loader'
        ]
      },
      {
        test: /\.(vue|js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png)/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },
};