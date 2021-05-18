const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, { stats, mode }) => {
    const isProd = mode === 'production';
    const filename = (ext) =>
        isProd ? `[name].[contenthash].${ext}` : `[name].${ext}`;
    return {
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
                template: path.resolve(__dirname, 'index.pug'),
                filename: 'index.html',
                minify: {
                    collapseWhitespace: isProd,
                },
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: `${filename('css')}`,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: `assets/${filename('[ext]')}`,
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
};
