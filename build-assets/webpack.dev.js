const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackCommonConf = require('./webpack.common')

module.exports = merge(WebpackCommonConf, {
  mode: 'development',
  output: {
    filename: 'main.js',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ]
})
