import * as webpack from 'webpack';
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const miniSVGDataURI = require('mini-svg-data-uri');

export function getArg(key: string, defaultVal?: string | null) {
  const index = process.argv.indexOf(key),
    next = process.argv[index + 1];

  defaultVal = defaultVal || null;

  return (index < 0) ? defaultVal : (!next || next[0] === '-') ? true : next;
}

export const getCssConfig = (modules = false,
                             use: [webpack.RuleSetUseItem[], webpack.RuleSetUseItem[]] = [[], []],
                             importLoaders = 1, sassOptions?: {[key: string]: any}): webpack.RuleSetRule => ({
  test: /\.(sa|sc|c)ss$/,
  use: [
    ...use[0],
    {
      loader: 'css-loader',
      options: {
        importLoaders,
        modules: modules ? {
          mode: 'local',
          // auto: true,
          // exportGlobals: true,
          localIdentName: sassOptions ? '[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
          localIdentContext: path.resolve(__dirname, "dev"),
          // localIdentHashSalt: "my-custom-hash",
          // namedExport: true,
          exportLocalsConvention: 'camelCase',
          // exportOnlyLocals: false,
        } : modules
      }
    },
    ...use[1],
    {
      loader: 'sass-loader',
      options: {
        additionalData: '@charset "utf-8";@import "STYLES/variables";',
        sassOptions
      }
    }
  ],
  [modules ? 'include' : 'exclude']: /\.module\.(sa|sc|c)ss$/
})

const config: webpack.Configuration = {
  context: __dirname,
  entry: {
    app: ['./dev/entry.ts']
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    library: '[name]',
    // clean: true, // Не работает с дев-сервером
    publicPath: '/'
    // environment: {
    //   // ie11
    //   arrowFunction: false
    // }
  },
  // target: ['web', 'es5'],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: ['./dev/js', 'node_modules'],
    alias: {
      'MEDIA': path.resolve(__dirname, 'dev/media'),
      'STYLES': path.resolve(__dirname, 'dev/scss'),
      'IMAGES': path.resolve(__dirname, 'dev/media/images'),
      'TYPES': path.resolve(__dirname, '.dev/js/types'),
      'STORE': path.resolve(__dirname, 'dev/js/store'),
      'HOOKS': path.resolve(__dirname, 'dev/js/hooks'),
      "COMPONENTS": path.resolve(__dirname, 'dev/js/components'),
      "COMMON": path.resolve(__dirname, 'dev/js/components/common'),
      // 'three': path.resolve(__dirname, 'node_modules/three/build/three.min.js'),
    },
    plugins: [
      PnpWebpackPlugin
    ]
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(woff|eot|otf|ttf|png|jp(e)?g|webp|gif|mp3|mp4|vlc|obj|fbx|cfg|json)$/,
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext][query]'
        }
      },
      {
        test: /\.woff2$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        generator: {
          dataUrl: (content: string | Buffer) => {
            content = content.toString();
            return miniSVGDataURI(content);
          }
        },
        use: 'svgo-loader'
      },
      {
        test: /\.glsl$/,
        type: 'asset/source'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(getArg('API_URL')),
      'process.env.PUBLIC_PATH': JSON.stringify(getArg('PUBLIC_PATH'))
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'dev/html/static'),
          to: path.resolve(__dirname, 'prod/static')
        },
        {
          from: path.resolve(__dirname, 'dev/html/tmp'),
          to: path.resolve(__dirname, 'prod/tmp')
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './dev/html/index.ejs'),
      meta: {},
      favicon: './dev/html/static/favicon.ico',
      filename: './index.html',
      inject: false
    })
  ]
};

export default config;
