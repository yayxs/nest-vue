// app/service/login.js
'use strict';
const Service = require('egg').Service;

class LoginService extends Service {
  // 检测用户是否登陆
  async isLogin() {
    const { userName } = this.ctx.request.body;
    const { password } = this.ctx.request.body;
    console.log(userName);
    console.log(password);

    // const sql = `SELECT userName FROM admin_user WHERE userName = '${userName}' AND password = '${password}'`;
    return '';
  }
}

module.exports = LoginService;
