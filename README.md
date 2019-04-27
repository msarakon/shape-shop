[![Build Status](https://travis-ci.org/msarakon/shape-shop.svg?branch=master)](https://travis-ci.org/msarakon/shape-shop)

# shape-shop

Install node on your machine. On MacOS on good way of doing this would be [nvm](https://github.com/creationix/nvm).

1. Run `npm install` in the project root (i.e. folder where package.json file is)
2. `npm start` will start local node server that uses HMR to reload any changes

You can access JSON under [http://localhost:3000/api/products](http://localhost:3000/api/products).

Same information is found from `./products.js`.

## Webpack

Supported loaders are found from `webpack.config.common.js`:
- SASS, CSS
- SVG
- ES2015+ via Babel

On webpack & SASS: https://github.com/webpack-contrib/sass-loader

## Testing

    npm test
    npm test -- --coverage

## Changelog
10.10.2017 - Updated the project for webpack and Jest. Added layouts to git.
