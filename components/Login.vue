<template>
  <div class="center has-background-dark has-text-light padding-all-3 border-radius-1">
    <form>
      <div class="field">
        <h2 class="has-text-centered is-size-3">{{$t('login')}}</h2>
      </div>
      <div class="field">
        <label for="email" class="label has-text-light">{{$t('email')}}</label>
        <div class="control">
          <input id="email" class="input" type="email" v-model="email">
        </div>
      </div>
      <div class="field">
        <label for="password" class="label has-text-light">{{$t('password')}}</label>
        <div class="control">
          <input id="password" class="input" type="password" v-model="password">
        </div>
      </div>
      <div class="field is-flex is-space-between">
        <button class="button btn-primary" @click="login">{{$t('login')}}</button>
        <button class="button btn-success" disabled>{{$t('register')}}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      const res = await this.$axios.post('/api/login', {
        email: this.email,
        password: this.password
      })
      if (res.data.error) {
        this.$store.dispatch('addNotify', res.data.error)
      } else {
        this.$store.commit('user', res.data.user)
        this.$router.push(this.localePath('index'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
