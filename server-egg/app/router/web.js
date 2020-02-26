'use strict';

/**
 * @description web前台路由
 */

module.exports = app => {
  const { router, controller } = app;
  // 测试是否成功
  router.get('/', controller.web.home.index);
  // // 邮箱验证码
  // router.get('/user/sendEmailCode', controller.user.email);
  // // 图片验证
  // router.get('/user/verification', controller.user.verification);
  // // 用户注册
  // router.post('/user/register', controller.user.register);
};
