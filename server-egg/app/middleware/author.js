'use strict';
// app/middleware/author.js

module.exports = options => {
  return async function author(ctx, next) {
    console.log(ctx);
  };
};
