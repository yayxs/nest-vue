'use strict';
// const md5 = require('md5');
const Controller = require('../base');

class UserController extends Controller {
  // 注册
  async register() {
    const {
      ctx: {
        request: { body },
      },
    } = this;
    const {
      email,
      password,
      nickName,
    } = body;
    // 数据验证

    console.log(email);
    console.log(password);
    console.log(nickName);
    // const res = await this.ctx.model.User.find();
    // const res = await this.ctx.model.User.create({
    //   email,
    //   nickName,
    //   password,
    // });
    // console.log(res);
  }
  async email() {
    const {
      ctx: {
        query: { email },
      },
    } = this;
    console.log(this.ctx.query);
    // 设置随机验证码
    const codeRandom = (Math.random().toFixed(4) * 10000).toString();
    console.log(`邮件是${email}+++${codeRandom}`);
    // 标题
    const title = '网站验证码';
    // html内容
    const html = `
    
    <h1>${codeRandom}</h1>
    `;
    // 服务
    const res = await this.service.tools.sendEmail(email, title, html);
    console.log(res);
    // 如果发送成功
    if (res) {
      this.ctx.session.emailCode = codeRandom;
      this.message('发送邮件成功');
    } else {
      this.error('发送失败');
    }
  }
  // 图片验证码
  async verification() {
    const { ctx } = this;

    const res = await this.service.tools.verification();
    console.log(res);
    ctx.response.type = 'image/svg+xml';
    this.success(res.text);
    ctx.session.captcha = res.text;
  }
}

module.exports = UserController;
