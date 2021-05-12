const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[contenthash].${ext}`);

module.exports = {
    context: path.resolve(__dirname, './'),
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: `${filename('js')}`,
        path: path.resolve(__dirname, 'build'),
        publicPath: '',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'build'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${filename('css')}`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/img'),
                    to: path.resolve(__dirname, 'build/src/img'),
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: `${filename('[ext]')}`,
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
