'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // router.get('/demoinfo', controller.user.demoinfo);

  router.post('/sendEmailCode', controller.user.sendEmailCode);

};
