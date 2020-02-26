'use strict';

// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'web端服务器启动';
  }
}

module.exports = HomeController;
