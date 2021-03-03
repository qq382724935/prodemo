/*
 * @Author: 刘利军
 * @Date: 2021-01-06 17:16:05
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-03-03 20:59:22
 * @Description:
 * @PageName:
 */
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
export default defineConfig({
  hash: true,
  layout: {
    name: defaultSettings.title,
    ...defaultSettings,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  antd: {},
  chunks: ['vendors', 'umi'],
  chainWebpack(config: any) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          automaticNameDelimiter: '.',
          name: true,
          minSize: 30000,
          minChunks: 1,
          cacheGroups: {
            vendors: {
              name: 'vendors',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: -12,
            },
          },
        },
      },
    });
  },
  targets: {
    ie: 11,
  },
  routes,
  manifest: {
    basePath: './',
    // basePath: '/',
  },
  // publicPath: '/',
  // base: '/',
  publicPath: './',
  base: './',
  // runtimePublicPath: true,
  // exportStatic: {
  // htmlSuffix: true,
  //   dynamicRoot: true,
  // },
});
