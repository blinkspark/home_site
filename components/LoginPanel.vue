<template>
  <div class="login">
    <h2 class="title">{{$t('login')}}</h2>
    <label for="email">Email</label>
    <input id="email" class="input" type="text" placeholder="Email" v-model="email">
    <label for="password">{{$t('password')}}</label>
    <input
      id="password"
      class="input"
      type="password"
      :placeholder="$t('password')"
      v-model="password"
    >
    <div class="btn-group between">
      <button class="primal" @click="login">{{$t('login')}}</button>
      <button class="success" @click="regiter">{{$t('register')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Login'
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const res = await this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        })
        if (!res.data.error) {
          this.$store.commit('user', res.data.user)
          this.password = ''
          this.$router.push(this.localePath('index'))
        } else {
          console.log(res.data.error)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async regiter() {
      try {
        const res = await this.$axios.post('/api/register', {
          email: this.email,
          password: this.password
        })
        if (!res.data.error) {
          this.$store.commit('user', res.data.user)
          this.$router.push(this.localePath('index'))
        } else {
          console.log(res.data.error)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_defines.scss';
.login {
  width: 20rem;
  color: $white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
}
</style>
