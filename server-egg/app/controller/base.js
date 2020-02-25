'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {

  // 返回成功
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }
  //   返回失败
  error(message, code = -1) {
    this.ctx.body = {
      code, message,
    };
  }
  // 信息
  message(message, code = 0) {
    this.ctx.body = {
      code, message,
    };
  }
}

module.exports = BaseController;
