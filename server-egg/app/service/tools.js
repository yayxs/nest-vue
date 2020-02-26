'use strict';

const Service = require('egg').Service;
const nodemailer = require('nodemailer');
const svgCaptcha = require('svg-captcha');
const transporter = nodemailer.createTransport({
  service: 'qq',
  host: 'smtp.ethereal.email',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: '1372239884@qq.com', // generated ethereal user
    pass: 'zafnetvkyhtcjdec', // generated ethereal password
  },
});
class ToolsService extends Service {
  async sendEmail(email, title, html) {
    const options = {
      from: '1372239884@qq.com', // sender address
      to: email, // list of receivers
      subject: title, // Subject line
      //   text: 'Hello world?', // plain text body
      html, // html body
    };

    try {
      await transporter.sendMail(options);
      return true;
    } catch (error) {
      return false;
    }
  }

  async verification() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 50,
    });

    return captcha;
  }

}

module.exports = ToolsService;
