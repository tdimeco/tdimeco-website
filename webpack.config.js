const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

// Plugins

const cleanPlugin = new CleanWebpackPlugin([
  'dist'
])

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
})

const extractStylesPlugin = new ExtractTextWebpackPlugin({
  filename: './styles/[name].bundle.[hash].css'
})

const providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})

// Configuration

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: './scripts/[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [
        'vue-loader'
      ]
    }, {
      test: /\.less$/,
      use: extractStylesPlugin.extract([
        'css-loader',
        'postcss-loader',
        'less-loader'
      ])
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader?name=[name].[hash].[ext]&outputPath=assets/&publicPath=../'
      ]
    }, {
      test: /\.htaccess$/,
      use: [
        'file-loader?name=[name]'
      ]
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    cleanPlugin,
    htmlPlugin,
    extractStylesPlugin,
    providePlugin
  ]
}
