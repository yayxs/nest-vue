// vue.config.js
// CMD node.js
const port = 8088;
const title = '博客admin后台管理系统';
// resolve定义一个绝对路径获取函数
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 有些值像 host、port 和 https 可能会被命令行参数覆写。
  // 有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。
  devServer: {
    port,
  },
  //   上下文
  publicPath: '/blog-admin',
  configureWebpack: {
    name: title,
    // plugins: [

    // ]
  },
  //   修改 Loader 选项
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    // 新增icons规则，设置svg-sprite-loader
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      }) // 使用图标名称
      .end();
  },
};
