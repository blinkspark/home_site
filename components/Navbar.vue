<template>
  <nav class="navbar">
    <n-link class="brand" :to="localePath('index')">{{$t('home')}}</n-link>
    <nav-menu>
      <nuxt-link :to="localePath('tools')">{{$t('tools')}}</nuxt-link>
      <nuxt-link :to="localePath('albums')">{{$t('albums')}}</nuxt-link>
      <nuxt-link :to="localePath('about')">{{$t('about')}}</nuxt-link>
    </nav-menu>
    <nav-menu>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('zh')">中文</nuxt-link>
    </nav-menu>
    <nav-menu right v-if="user.email">
      <nuxt-link :to="localePath('dashboard')">{{user.email}}</nuxt-link>
      <a @click="logout">{{$t('logout')}}</a>
    </nav-menu>
    <nav-menu right v-else>
      <nuxt-link :to="localePath('login')">{{$t('login')}}</nuxt-link>
    </nav-menu>
  </nav>
</template>

<script>
import NavMenu from './NavMenu'
export default {
  components: {
    NavMenu
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.commit('user', {})
      this.$axios.get('/api/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_defines.scss';
nav {
  height: $navbarHeight;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: $primalColor;
  color: $white;
  box-shadow: 0 0.2rem 0.2rem $shadowColor;
  a {
    color: $white;
    line-height: $navbarHeight;
    padding: 0 0.5rem;
    &:hover {
      background-color: lighten($color: $primalColor, $amount: 10%);
    }
  }
  .brand {
    font-size: 1.25rem;
  }
}
</style>

