'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '服务器已经启动--http://127.0.0.1:7001/';
  }
}

module.exports = HomeController;
