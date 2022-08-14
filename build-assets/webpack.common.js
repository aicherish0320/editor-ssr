const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { srcPath, distPath } = require('./constants')

module.exports = {
  entry: path.join(srcPath, 'index'),
  output: {
    path: distPath,
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(srcPath, 'favicon.ico'),
          to: path.join(distPath, 'favicon.ico')
        }
      ]
    })
  ]
}
