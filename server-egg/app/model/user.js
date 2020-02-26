'use strict';
// {app_root}/app/model/user.js

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },

    nickName: { type: String, required: true },
  }, { timestamps: true });

  return mongoose.model('User', UserSchema);
};

// // {app_root}/app/controller/user.js
// exports.index = function* (ctx) {
//   ctx.body = yield ctx.model.User.find({});
// };
