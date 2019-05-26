CleanPlugin = require('clean-webpack-plugin')
HtmlPlugin = require('html-webpack-plugin')
MiniCssExtractPlugin = require('mini-css-extract-plugin')
VueLoaderPlugin = require('vue-loader/lib/plugin')
FaviconsPlugin = require('favicons-webpack-plugin')

module.exports =
  entry: main: './src/main.coffee'
  output: filename: './assets/scripts.[hash].js'
  module: rules: [
    {
      test: /\.coffee$/
      use: [ 'coffee-loader' ]
    }, {
      test: /\.vue$/
      use: [ 'vue-loader' ]
    }, {
      test: /\.less$/
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader' ]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/
      use: [ 'file-loader?name=[name].[hash].[ext]&outputPath=assets/&publicPath=../assets/' ]
    }, {
      test: /\.htaccess$/
      use: [ 'file-loader?name=[name]' ]
    }
  ]
  devServer:
    # host: '0.0.0.0'
    contentBase: './dist'
    historyApiFallback: true
  # devtool: 'inline-source-map'
  plugins: [
    new CleanPlugin
    new HtmlPlugin(
      template: './src/index.html'
    )
    new MiniCssExtractPlugin(
      filename: './assets/styles.[hash].css'
    )
    new VueLoaderPlugin
    new FaviconsPlugin(
      logo: './src/images/favicon.svg'
      background: '#0d507f'
      prefix: './assets/favicons.[hash]/'
      persistentCache: false
      icons:
        android: false
        appleIcon: true
        appleStartup: false
        coast: false
        favicons: true
        firefox: false
        opengraph: false
        twitter: false
        yandex: false
        windows: false
    )
  ]
