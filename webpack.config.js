'use strict';

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
    output: {
        path: path.join (__dirname + '/public'),
        filename: "[name].js",
        chunkFilename: '[id].chunk.js',
        //publicPath: path.join (__dirname+ "public")
    },
    entry:{
     /*   comm: ['jquery','angular','angular-ui-router','angular-animate','moment'],*/
        //app: ['webpack/hot/dev-server', path.join(__dirname, '/src/js/app.js')]
        app: './src/js/app.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'npm': __dirname + '/node_modules',
        },
        extensions:['', '.js','.html', '.css', '.styl']
    },
    module: {
        noParse:[
            path.join(__dirname+'/node_modules', '/video.js/dist/video.js')
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            //style-loader!css-loader
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.woff2$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    "css?sourceMap!stylus?sourceMap"
                )
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devtool: 'eval',
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
            name:'comm',
            filename:'comm.js'
        }),*/
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery' : 'jquery'
        }),
        new ExtractTextPlugin('index.css'),
        new HtmlWebpackPlugin({
            template: './views/index.html',
            filename: './index.html',
            inject: true
        })
    ],
    devServer: {
        port: 3131,
        contentBase: __dirname,
    }
};

module.exports = config;