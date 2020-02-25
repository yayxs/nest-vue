<template>
  <v-app id="inspire">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="昵称"
        required
      />

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
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    valid: true,
    name: 'yayxs',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: 'leaderywl@163.com',
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
    checkbox: false
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    // 发送验证码
    async  sendVerificationCode () {
      const res = await this.$http.post('/user/sendEmailCode', {
        email: this.email
      })
      global.console.log(res)
    }
  }
}
</script>
