/*
 * @Author: 刘利军
 * @Date: 2021-01-06 17:18:09
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-03-03 16:10:22
 * @Description:
 * @PageName:
 */
export default [
  {
    path: '/index',
    name: '主页',
    component: './index',
    hideInMenu: true,
  },
  {
    path: '/sqlite',
    name: 'sqlite',
    component: './sqlite',
  },
  {
    path: '/amap',
    name: '高德地图',
    component: './amap',
  },
  {
    path: '/',
    redirect: '/index',
  },
];
