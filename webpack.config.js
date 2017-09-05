const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

// Plugins

const cleanPlugin = new CleanWebpackPlugin([
  'dist'
])

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
})

const faviconsPlugin = new FaviconsWebpackPlugin({
  logo: './src/images/favicon.svg',
  background: '#226697',
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

const extractStylesPlugin = new ExtractTextWebpackPlugin({
  filename: './styles/[name].bundle.[hash].css'
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
    //host: '0.0.0.0',
    contentBase: './dist',
    historyApiFallback: true
  },
  //devtool: 'inline-source-map',
  plugins: [
    cleanPlugin,
    htmlPlugin,
    faviconsPlugin,
    extractStylesPlugin
  ]
}
