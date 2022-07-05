<template>
  <div class="container">
    <div class="login">
      <input v-model="loginId">
      <input v-model="loginPassword" type="password">
      <div style="display: flex; justify-content: center; margin-top: 8px;">
        <button @click="onClickLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      loginId: 'convergence@catenoid.net',
      loginPassword: ''
    }
  },
  methods: {
    ...mapActions('loginStore', [
      'requestLogin'
    ]),
    created () {
      this.initializeLoginInfo()
    },
    async onClickLogin () {
      const res = await this.requestLogin({
        loginID: this.loginId,
        loginPassword: this.loginPassword
      })

      if (res.data.resultStatus === 200) {
        await this.$router.push('/goods')
      }
    }
  }
}
</script>

<style scoped>
.container {
  align-items: center;
  background-image: url('../../assets/image/login-background.png');
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
}
.login {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
  width: 480px;
  margin-bottom: 100px;
  padding: 24px 32px;
  gap: 8px;
}
.login input {
  width: 100%;
  height: 24px;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid #cecece;
}
.login button {
}
</style>
