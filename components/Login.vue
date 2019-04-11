<template>
  <div class="center bg-secondary text-light px-5 py-5 br-1">
    <form>
      <div class="form-group">
        <h2 class="text-center">{{$t('login')}}</h2>
      </div>
      <div class="form-group">
        <label for="email">{{$t('email')}}</label>
        <input id="email" class="form-control" type="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">{{$t('password')}}</label>
        <input id="password" class="form-control" type="password" v-model="password">
      </div>
      <div class="form-group d-flex">
        <button class="btn btn-primary mr-auto" @click="login">{{$t('login')}}</button>
        <button class="btn btn-success" disabled>{{$t('register')}}</button>
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
      if(res.data.error){
        console.error(res.data.error)
      }else{
        this.$store.commit('user',res.data.user)
        this.$router.push(this.localePath('index'))
      }
    }
  }
}
</script>

