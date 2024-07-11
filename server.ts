import * as WebpackDevServer from 'webpack-dev-server';
import {getArg} from './webpack.common';

const pages = {
  '': require('./dev/html/testData/pages'),
  'contact': require('./dev/html/testData/pages/contact'),
  'products': require('./dev/html/testData/pages/products'),
  'shops': require('./dev/html/testData/pages/shops'),
  'texts': require('./dev/html/testData/pages/texts'),
}

export const proxy: WebpackDevServer.ProxyConfigMap | WebpackDevServer.ProxyConfigArray = {
  // "/spa": {
  //   target: 'https://',
  //   secure: false,
  //   cookieDomainRewrite: '127.0.0.1',
  //   changeOrigin: te,
  //   // withCredentials: te,
  // }
  // '/api/msg': {
  //   //@ts-ignore
  //   bypass: (req: any, res: any, proxyOptions: any) => res.send({
  //     mssg: 'proxy server - Message came from bypass property in webpack'
  //   })
  // },
}

export const onBeforeSetupMiddleware = (devServer: WebpackDevServer) => {
  Object.entries(pages).forEach(([key, value]) => {
    devServer.app?.get(`${getArg('API_URL')}/${key}`, (req, res) => {
      res.json({
        status: 'success',
        content: value.default
      });
    });
  });
}
