<template>
  <div class="wrapper">
    <el-form :model="loginFormData" ref="form" label-width="80px">
      <!-- 用户名 -->
      <el-form-item label="用户名:">
        <el-input v-model="loginFormData.username" size="small" style="width:400px"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码:" size="small">
        <el-input v-model="loginFormData.password" size="small" style="width:400px"></el-input>
      </el-form-item>
      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
  // initial data
  private loginFormData = {
    username: '',
    password: '',
  };

  // methods
  // eslint-disable-next-line class-methods-use-this
  private onSubmit(): void {
    console.log(this.loginFormData);
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
