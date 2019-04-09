<template>
  <div class="center bg-secondary text-light px-5 py-5">
    <form>
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
      email:'',
      password:''
    }
  },
  methods: {
    login(){
      console.log(this.email)
      console.log(this.password)
    }
  }
}
</script>

<style lang="scss" src='~/assets/style.scss'></style>

