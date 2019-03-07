<template>
  <div class="navbar">
    <n-link class="brand" :to="localePath('index')">{{$t('home')}}</n-link>
    <nav-menu>
      <nuxt-link :to="localePath('tools')">{{$t('tools')}}</nuxt-link>
      <nuxt-link :to="localePath('albums')">{{$t('albums')}}</nuxt-link>
      <nuxt-link :to="localePath('about')">{{$t('about')}}</nuxt-link>
    </nav-menu>
  </div>
</template>

<script>
import NavMenu from './NavMenu'
export default {
  components: {
    NavMenu
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/defines.scss';
.navbar {
  height: $navbarHeight;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: $primalColor;
  color: $white;
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

