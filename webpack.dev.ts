import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript').default;

import common, {getCssConfig as getCssConfigDefault} from './webpack.common';
import {proxy, onBeforeSetupMiddleware} from './server';
import path from 'path';

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServerConfiguration;
}

const getCssConfig = (modules?: boolean) => getCssConfigDefault(modules, [['style-loader'], []]);

const config: Configuration = merge<Configuration>(common, {
  mode: 'development',
  target: 'web',
  output: {
    filename: '[name].js',
    assetModuleFilename: '[name].[ext]'
  },
  watchOptions: {
    aggregateTimeout: 100,
    ignored: ['node_modules/**']
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: true
    }),
    // new webpack.SourceMapDevToolPlugin({
    //   append: '[url]',
    //   filename: '[name].map',
    // })
  ],
  devServer: {
    host: process.platform === 'win32' ? '127.0.0.1' : '0.0.0.0',
    // host: process.platform === 'win32' ? 'local-ip' : '0.0.0.0',
    port: 8080,
    open: true,
    static: {
      directory: path.join(__dirname, 'prod')
    },
    client: {
      // logging: "info",
      // Can be used only for `errors`/`warnings`
      //
      overlay: {
        errors: true,
        warnings: true
      }
      // progress: true,
    },
    devMiddleware: {
      // index: true,
      // mimeTypes: { "text/html": ["phtml"] },
      // publicPath: "/publicPathForDevServe",
      // serverSideRender: true,
      // writeToDisk: true,
    },
    // https: true,
    historyApiFallback: true,
    proxy,
    onBeforeSetupMiddleware
  },
  module: {
    rules: [
      {
        test: /\.[jt]s(x)?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                require.resolve('react-refresh/babel'),
              ]
            }
          },
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()]
              }),
            }
          }
        ]
      },
      getCssConfig(true),
      getCssConfig(false)
    ]
  }
});

export default config;
