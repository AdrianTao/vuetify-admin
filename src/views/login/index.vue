<template>
  <v-app class="login">
    <div class="login-box">
      <v-sheet
        :width="280"
        :height="250"
        elevation="4"
        class="login-wrap"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="username"
            :counter="10"
            :rules="usernameRules"
            label="账号"
            required
          />

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="密码"
            required
          />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            block
            @click="validate"
          >
            登 录
          </v-btn>
        </v-form>
      </v-sheet>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      v => !!v || '请输入账号'
    ],
    password: '',
    passwordRules: [
      v => !!v || '请输入密码',
      v => v.length >= 6 || '最少6位'
    ]
  }),
  methods: {
    ...mapActions({
      login: 'user/login'
    }),

    async validate() {
      if (this.$refs.form.validate()) {
        await this.login()
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .login-wrap {
      padding: 20px;
    }
  }
}
</style>
