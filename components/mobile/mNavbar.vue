<template>
  <nav>
    <a class="brand" @click="toggle">
      <i class="fas fa-bars"></i> {{$t('home')}}
    </a>
    <transition>
      <m-nav-menu v-if="show">
        <nuxt-link :to="localePath('m')">{{$t('home')}}</nuxt-link>
        <!-- <nuxt-link :to="localePath('tools')">{{$t('tools')}}</nuxt-link> -->
        <!-- <nuxt-link :to="localePath('albums')">{{$t('albums')}}</nuxt-link> -->
        <nuxt-link :to="localePath('m-about')">{{$t('about')}}</nuxt-link>
      </m-nav-menu>
    </transition>
    <transition>
      <m-nav-menu v-if="show">
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('zh')">中文</nuxt-link>
      </m-nav-menu>
    </transition>
  </nav>
</template>

<script>
import mNavMenu from '../../components/mobile/mNavMenu'

export default {
  components: {
    mNavMenu
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_defines.scss';
nav {
  min-height: $navbarHeight;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
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

