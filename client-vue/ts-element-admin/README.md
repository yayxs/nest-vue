> TypeScript+ElementUI 网站后台管理系统

:::
ElementUI + Vue mixin 实现表单的全局验证 :tada:
:::

## 写在前面

程序员日常操作便是输出各种`API`，但最不愿做的想必就是重复的造轮子。我们知道`ElementUI` + `Vue` 这一套组合非常适合写一套后台管理系统。众所周知，在后台管理系统中，表格的输入是十分常见的。那么我该如何去处理这些验证呢？

### 官网分享

- [Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 zh-CN](https://element.eleme.cn/#/zh-CN)

- [混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能](https://cn.vuejs.org/v2/guide/mixins.html)

-[Validate form asynchronous.](https://github.com/yiminghe/async-validator)

### 目前问题

我们翻看`ElementUI`的官方文档可以看出

> Form 表单 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

也就是说是支持表单验证的，其中是这样说道：只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。

```html
<el-form :rules="rules">
  <!-- 用户名 -->
  <el-form-item prop="username">
    <el-input v-model="username"></el-input>
  </el-form-item>
  <!-- 密码 -->
  <el-form-item prop="password">
    <el-input v-model="password"></el-input>
  </el-form-item>
</el-form>
```

```js
rules: {
    username:[
        { { validator: validateUserName, trigger: 'blur' }}
    ],
    password:[
        { { validator: validatePassword, trigger: 'blur' }}
    ]
}
```

```js
var validatePassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (this.ruleForm.checkPass !== "") {
      this.$refs.ruleForm.validateField("checkPass");
    }
    callback();
  }
};
```

官网有明确指示: **自定义校验 callback 必须被调用** ，这就遇到一个问题，一个项目中那么多的表单项，难道需要我们在有表单项的`.Vue`文件中写这些验证规则嘛？

## Mixin 混入

这个时候我们可以借助`Vue`的混入

### 什么是混入？

`混入` 说白了是一个对象，将会和组件浑然一体，融为一体。发生冲突后，官方说以`恰当`的方式`融合`

- 递归合并
- 组件优先
- 执行时期：混入对象的钩子>组件自身钩子

### 书写混入

