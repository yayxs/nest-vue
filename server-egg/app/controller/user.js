'use strict';

const Controller = require('./base');

class UserController extends Controller {

  async email() {
    const { ctx } = this;
    console.log(ctx);
  }
}

module.exports = UserController;
