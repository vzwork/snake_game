const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|giv)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
  },
};