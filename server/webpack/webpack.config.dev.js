const path    = require('path');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname, '../../');

module.exports = {
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    path.resolve(rootPath, 'client/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader  : 'sass-resources-loader',
            options : {
              resources: path.resolve(rootPath, 'client/styles/index.scss'),
            },
          },
        ]
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'webpack-graphql-loader',
            options: {
              minify: true,
              output: 'string',
              removeUnusedFragments: true
            }
          }
        ]
      },
      {
        test : /\.svg$/,
        use  : [
          'raw-loader',
        ],
      },
    ]
  },
  plugins: [],
  resolve: {
    alias: {
      client : path.resolve(rootPath, 'client')
    },
    extensions: ['.js', '.scss', '.graphql', '.svg'],
    modules: [
      path.resolve(rootPath, 'client'),
      'node_modules'
    ]
  }
}
