'use strict';

const Controller = require('./base');

class UserController extends Controller {
  // async demoinfo() {
  //   // const { ctx } = this;
  //   this.success('success');
  // }

  async sendEmailCode() {
    console.log('11');
  }
}

module.exports = UserController;
