import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

import common, {getCssConfig as getCssConfigDefault} from './webpack.common';


const getCssConfig = (modules?: boolean) => getCssConfigDefault(modules, [
  [{
    loader: MiniCssExtractPlugin.loader
  }],
  [{
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: {
          'postcss-preset-env': {
            browsers: 'last 2 versions',
            autoprefixer: {grid: true}
          }
        }
      }
    }
  }],
], 2, {includePaths: ['./dev/scss']});


const config: webpack.Configuration = merge<webpack.Configuration>(common, {
  mode: 'production',
  target: ['web'],
  output: {
    filename: '[name].[fullhash].js',
    assetModuleFilename: '[name].[fullhash].[ext]',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new CssMinimizerPlugin({
        parallel: true
      })
    ],
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      getCssConfig(true),
      getCssConfig(false)
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});


export default config;