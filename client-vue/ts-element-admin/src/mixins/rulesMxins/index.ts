/**
 * Created by yayxs on 20/02/17.
 */

export default {
  methods: {
    /**
     * @description 自定义验证规则-验证密码
     * @param {String} rule
     * @returns {}
     */
    validatePassword(rule: any, value: string, callback: Function): void {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    },
  },
};
