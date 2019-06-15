{ CleanWebpackPlugin } = require('clean-webpack-plugin')
HtmlWebpackPlugin = require('html-webpack-plugin')
MiniCssExtractPlugin = require('mini-css-extract-plugin')
VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports =
  entry: main: './src/main.coffee'
  output:
    filename: './assets/scripts.[hash].js'
    publicPath: '/'
  module: rules: [
    {
      test: /\.coffee$/
      use: [ 'coffee-loader' ]
    }, {
      test: /\.pug$/
      use: [ 'pug-plain-loader' ]
    }, {
      test: /\.vue$/
      use: [ 'vue-loader' ]
    }, {
      test: /\.scss$/
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
    }, {
      test: /\.(png|jpe?g|gif|svg|ico|woff|woff2|eot|ttf|otf)$/
      use: [ 'file-loader?name=[name].[hash].[ext]&outputPath=assets/' ]
    }, {
      test: /\.htaccess$/
      use: [ 'file-loader?name=[name]' ]
    }
  ]
  devServer:
    host: '0.0.0.0'
    historyApiFallback: true
  # devtool: 'inline-source-map'
  plugins: [
    new CleanWebpackPlugin
    new HtmlWebpackPlugin(
      template: './src/index.html'
    )
    new MiniCssExtractPlugin(
      filename: './assets/styles.[hash].css'
    )
    new VueLoaderPlugin
  ]
