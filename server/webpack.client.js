const path = require('path');

module.exports = {
    // the name of the root file
    entry: './src/client/client.js',

    // where to put the output bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // translate jsx
                        'stage-0', // async code
                        ['env', {
                            targets: {
                                browsers: ['last 2 versions'],
                            }
                        }]
                    ]
                }
            }
        ]
    }
};
