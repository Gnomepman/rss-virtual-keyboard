const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Virtual keyboard',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader", "css-loader", "sass-loader",
                ],
              },
        ],
    },
    devServer: {
        static: "./dist",
        port: 3002,
    },
};