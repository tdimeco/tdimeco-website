const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// Plugins

const cleanWebpackPlugin = new CleanWebpackPlugin([
  'dist'
])

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
})

const vueLoaderPlugin = new VueLoaderPlugin()

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: './assets/styles.[hash].css'
})

const faviconsWebpackPlugin = new FaviconsWebpackPlugin({
  logo: './src/images/favicon.svg',
  background: '#0d507f',
  prefix: './assets/favicons.[hash]/',
  persistentCache: false,
  icons: {
    android: false,
    appleIcon: true,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false
  }
})

// Configuration

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: './assets/scripts.[hash].js',
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
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader?name=[name].[hash].[ext]&outputPath=assets/&publicPath=../assets/'
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
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },
  devServer: {
    //host: '0.0.0.0',
    contentBase: './dist',
    historyApiFallback: true
  },
  //devtool: 'inline-source-map',
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin,
    vueLoaderPlugin,
    miniCssExtractPlugin,
    faviconsWebpackPlugin
  ]
}
