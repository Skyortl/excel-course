const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const bundleFilename = extension => isProd ? `bundle.[hash].${extension}` : `bundle.${extension}`;

function jsLoaders() {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }];

    if (isDev) {

    }
    return [];
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: bundleFilename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devServer: {
        port: 3000,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            }
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/favicon.ico'),
                to: path.resolve(__dirname, 'dist/favicon.ico')
            }]
        }),
        new MiniCssExtractPlugin({
            filename: bundleFilename('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: jsLoaders(),
            }
        ]
    }
}
