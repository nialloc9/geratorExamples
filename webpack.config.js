var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};