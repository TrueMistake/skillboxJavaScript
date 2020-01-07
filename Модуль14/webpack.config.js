'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "cheap-inlune-module-source-map" : null
};