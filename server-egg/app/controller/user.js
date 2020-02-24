'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async demoinfo() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
    };
  }
}

module.exports = UserController;
