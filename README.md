# Whee-project Instructions

You can use this project base or find a better suited one for your preferred tools. Few good ones are:
1. vue-cli or others listed here: [vuejs-templates](https://github.com/vuejs-templates)
2. react-create-app: [Create React App](https://github.com/facebookincubator/create-react-app)
3. preact-cli: [preact-cli](https://github.com/developit/preact-cli)
4. ...or anything that you are used to using - there are no limitations here!

Install node on your machine. On MacOS on good way of doing this would be [nvm](https://github.com/creationix/nvm).

1. Run `npm install` in the project root (i.e. folder where package.json file is)
2. `npm start` will start local node server that uses HMR to reload any changes

You can access JSON under [http://localhost:3000/mock-api/products.json](http://localhost:3000/mock-api/products.json).

## Notes

This project is not complete, there are things that are done one-way, but could be done another way etc. Somethings might be incomplete.


## Webpack

Supported loaders are found from `webpack.config.common.js`:
- SASS, CSS
- SVG
- ES2015+ via Babel

On webpack & SASS: https://github.com/webpack-contrib/sass-loader

# Testing

There's only 1 example test in this project, but write more as you see fit. We are using Jest, it's easy to get working and the documentation is good: [https://facebook.github.io/jest/](https://facebook.github.io/jest/)

Test(s) can be run with `npm run test`. Tests are located under ./test -folder. Name your tests as `_nameOfTest_.spec.js`. You can use any testing framework you like, but Jest is preconfigured.

# Changelog
10.10.2017 - Updated the project for webpack and Jest. Added layouts to git.