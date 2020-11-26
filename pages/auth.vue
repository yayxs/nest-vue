<template>
<div>
  <div class="auth">
    <input type="radio" name="auth" checked hidden id="login-btn">
    <input type="radio" name="auth" hidden id="register-btn">
    <div class="auth-title">
      <label for="login-btn">登录</label>
      <label for="register-btn">注册</label>
      <em></em>
    </div>
    <div class="auth-form">
      <form>
        <div>
          <input type="text" placeholder="请输入手机" required pattern="^1[3456789]\d{9}$">
          <label for="">手机</label>
        </div>
        <div>
          <input type="password" placeholder="请输入6-20位密码" required pattern="^[\dA-Za-z_]{6,20}$">
          <label for="">密码</label>
        </div>
        <button type="button">登录</button>
      </form>
      <form>注册</form>
    </div>
  </div>
</div>
</template>

<script>
export default {
data() {
return {

}
},
methods: {

},
mounted() {

}
}
</script>
<style scoped lang='scss'>
.auth{
  overflow: hidden;
  border-radius: 2px;
  width: 320px;
  background-color: #fff;
  border: 1px solid #ccc;
  .auth-title{
    display: flex;
    position: relative;
    border-bottom:1px solid #eee;
    height: 40px;
    label{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      cursor: pointer;
      transform: all 300ms;
      &:hover{
        color: #66f;
      }
    }
    em{
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 1px;
      width: 50%;
      height: 2px;
      background-color: #f66;
      transition: all 300ms cubic-bezier(.4,.4,.25,1.35);
    }
  }
  .auth-form{
    display: flex;
    width: 200%;
    height: 250px;
    transition: all 300ms cubic-bezier(.4,.4,.25,1.35);
    form{
      flex: 1;
      padding: 20px;
    }
  }
  #login-btn:checked{
    & ~ .auth-title{
      label:nth-child(1){
        font-weight: bold;
        color: #f66;
      }
      em{
        transform: translate(0,0);
      }
    }
    & ~ .auth-form{
      transform: translate(0,0);
    }
  }
  #register-btn:checked{
    & ~ .auth-title{
      label:nth-child(2){
        font-weight: blod;
        color: #f66;
      }
      em{
        transform: translate(160px,0);
      }
    }
    & ~ .auth-form{
      transform: translate(-50%,0);
    }
  }
}
</style>
