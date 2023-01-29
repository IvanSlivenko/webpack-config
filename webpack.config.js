const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    
    entry: './src/index.js',
     output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-builde.js',
    },
    // stats: 'errors-only',
    module: {
        rules:[
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                    
                   
                ],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }   
        ]
    },

    plugins: [
                new HtmlWebpackPlugin({ template: 'src/index.html' }),
                new MiniCssExtractPlugin(
                    {
                        filename: "style.css",
                    }),
                new CleanWebpackPlugin(),
                
    
            ],
    


    devServer: {
        port: 7777,
        open: true,
        
    },
     
};
