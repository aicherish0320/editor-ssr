const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackCommonConf = require('./webpack.common')

module.exports = merge(WebpackCommonConf, {
  mode: 'production',
  output: {
    filename: 'main.[contenthash:8].js',
    clean: true
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash:8].css'
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
})
