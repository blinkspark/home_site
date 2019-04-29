<template>
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <n-link class="navbar-item" :to="localePath('index')">Neal Wang</n-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="toggle"
          :class="{'is-active':navMenuActive}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{'is-active':navMenuActive}">
        <div class="navbar-start">
          <n-link class="navbar-item" :to="switchLocalePath('en')">English</n-link>
          <n-link class="navbar-item" :to="switchLocalePath('zh')">中文</n-link>
        </div>
        <div class="navbar-end" v-if="isLogin">
          <n-link class="navbar-item" :to="localePath('upload')">{{$t('upload')}}</n-link>
          <n-link :to="localePath('dashboard')" class="navbar-item">{{user.email}}</n-link>
          <a class="navbar-item" @click="logout">{{$t('logout')}}</a>
        </div>
        <div class="navbar-end" v-else>
          <n-link :to="localePath('login')" class="navbar-item">{{$t('login')}}</n-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    },
    isLogin() {
      if (this.user.email) return true
      return false
    }
  },
  methods: {
    async logout() {
      await this.$axios.get('/api/logout')
      this.$store.commit('user', {})
    },
    toggle() {
      this.navMenuActive = !this.navMenuActive
    }
  },
  data() {
    return {
      navMenuActive: false
    }
  }
}
</script>

<style>
</style>
