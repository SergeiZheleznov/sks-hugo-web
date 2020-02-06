const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'static/dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [
                'static/dist/*',
                'data/assets/assets.json',
            ],
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.resolve(__dirname, 'data/assets'),
            prettyPrint: true,
            fullPath: false,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
};
