'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const checkToken = app.middleware.auth();
  router.get('/', controller.home.index);
  router.post('/token', checkToken,controller.home.validateToken)
  router.post('/buyflag',checkToken,controller.home.buyFlag)
};
