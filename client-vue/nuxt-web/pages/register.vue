<template>
  <v-app id="inspire">
    <v-row
      align="center"
      justify="center"
    >
      <v-card

        class="mx-auto"
        width="500"
        height="400"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="nickName"
            :counter="10"
            :rules="nickNameRules"
            label="昵称"
            required
          />
          <!-- 邮箱 -->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="邮箱"
            required
          />
          <v-text-field
            v-model="emailCode"

            label="邮箱验证码"
            required
          />
          <v-btn
            color="warning"
            @click="sendVerificationCode"
          >
            发送邮箱验证码
          </v-btn>
          <v-text-field
            v-model="password"

            label="密码"
            required
          />
          <v-text-field
            v-model="password2"

            label="再次输入密码"
            required
          />

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="你是否同意?"
            required
          />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            验证
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            重置表单
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            重置验证
          </v-btn>

          <v-btn
            color="purple"
            @click="handleRegister"
          >
            注册
          </v-btn>
        </v-form>
      </v-card>
    </v-row>
    <!-- 注册卡片 -->
  </v-app>
</template>

<script>
import md5 from 'md5'
export default {
  layout: 'login',
  data: () => ({
    valid: true,
    nickName: 'yayxs',
    nickNameRules: [
      v => !!v || 'nickName is required',
      v => (v && v.length <= 10) || 'nickName must be less than 10 characters'
    ],
    email: '1372239884@qq.com',
    emailCode: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false,
    password: '123456',
    password2: '123456'
  }),
  methods: {
    // 验证所有输入并返回所有输入是否有效
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    // 清除所有输入并重置其验证错误
    reset () {
      this.$refs.form.reset()
    },
    // 仅重置输入验证，而不会更改其状态
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    // 发送验证码 阿里人机验证
    async sendVerificationCode () {
      global.console.log('发送邮箱验证码')
      const params = {
        email: this.email
      }
      const res = await this.$http.get('/user/sendEmailCode', params)
      global.console.log(res)
    },
    // 注册
    async handleRegister () {
      global.console.log('注册')
      const params = {
        email: this.email,
        password: md5(this.password),
        emailCode: '1234',
        captcha: 'abcd',
        nickName: this.nickName
      }

      const res = await this.$http.post('/user/register', params)
      global.console.log(res)
    }
  }
}
</script>
<style lang="scss">

</style>
