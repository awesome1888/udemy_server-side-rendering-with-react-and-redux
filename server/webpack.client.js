const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // the name of the root file
    entry: './src/client/client.js',

    // where to put the output bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

// todo: Object.assign() :)
module.exports = merge(baseConfig, config);
