# Webpack

This folder contains an example of how we can use webpack to bundle our code.

### Prerequisite

You have installed nodejs and npm.



### Get going

Follow the steps to get started.

1. Step into the folder containing the file `package.json`.
1. Run the command `$ npm install` to install the dependencies. The dependencies are:
    * eslint (5 dependencies)
    * webpack
    * webpack-cli

In the file `package.json`, you have two scripts, "build" and "test".

Build (webpack --config webpack.config.js) builds the bundle with the help of the specified config file. It takes the files in the folder `src/` and bundles them into the folder `dist/` which will contain the files to open in a browser.

Test (eslint -c .eslintrc.json src/) will run a linter, eslint, to validate your files in the folder src/ according to the ES standard. If you get validation errors, you can run the script with an option: `$ npm test -- --fix` to automatically fix them.
