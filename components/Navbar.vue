<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <n-link class="navbar-brand" :to="localePath('index')">Neal Wang</n-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <n-link class="nav-link" :to="switchLocalePath('en')">English</n-link>
          </li>
          <li class="nav-item">
            <n-link class="nav-link" :to="switchLocalePath('zh')">中文</n-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown link</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>-->
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-if="isLogin" class="nav-item">
            <a class="nav-link">{{user.email}}</a>
          </li>
          <li v-if="isLogin" class="nav-item">
            <a class="nav-link" @click="logout">{{$t('logout')}}</a>
          </li>
          <li v-else class="nav-item">
            <n-link :to="localePath('login')" class="nav-link">{{$t('login')}}</n-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user(){
      return this.$store.state.user
    },
    isLogin() {
      if (this.user.email) return true
      return false
    }
  },
  methods: {
    async logout(){
      await this.$axios.get('/api/logout')
      this.$store.commit('user',{})
    }
  },
}
</script>

<style>
</style>
