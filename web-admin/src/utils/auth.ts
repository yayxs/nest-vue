/**
 * @description token相关
 */

import Cookies from 'js-cookie';

import defaultConfig from './config';
// 获取token
const getToken = () => Cookies.get(defaultConfig.TOKEN_NAME);
// 设置token
const setToken = (token:any) => Cookies.set(defaultConfig.TOKEN_NAME, token);
// 移除token
const removeToken = () => Cookies.remove(defaultConfig.TOKEN_NAME);
export {
  getToken,
  setToken,
  removeToken,
};
