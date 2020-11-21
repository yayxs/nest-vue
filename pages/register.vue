<template>
  <div class="register-container">
    <div class="login-box">
      <h1>注册</h1>
      <div class="input-box">
        <div class="ipt-username">
          <span class="icon"></span>
          <input type="text" />
        </div>
        <div class="ipt-pwd">
          <span class="icon"></span>
          <input type="password" />
        </div>
        <input type="button" class="login-btn" value="注册" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.register-container {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/images/main_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .login-box {
    width: 22rem;
    height: 13rem;
    margin: 0 auto;
    background-color: #00000090;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: calc(-22rem / 2);
    left: 50%;
    margin-left: calc(-13rem / 2);

    h1 {
      color: #fff;
    }
    .input-box {
      margin-top: 20px;
      & > div {
      }
      input {
        border: 0;
        padding: 10px 10px;
        border-bottom: 1px solid white;
        color: #fff;
        background-color: #00000000;
      }
    }
    .login-btn {
      margin-top: 30px;
      width: 150px;
      height: 25px;
      line-height: 8px;
      color: white;
      border: 0;
      border-radius: 20px;
      cursor: pointer;
      background-image: linear-gradient(
        to right,
        #b8cbb8 0%,
        #b8cbb8 0%,
        #b465da 0%,
        #cf6cc9 33%,
        #ee609c 66%,
        #ee609c 100%
      );
    }
  }
}
</style>
