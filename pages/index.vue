<template>
  <div class="test">
    <transition>
      <fullscreen-hero v-if="notScrolled">
        <h1 class="title">{{$t('welcome')}}</h1>
      </fullscreen-hero>
    </transition>
    <navbar/>
  </div>
</template>

<script>
import FullscreenHero from '../components/FullscreenHero'
import Navbar from '../components/Navbar'

export default {
  head:{
    title:'Neal Wang'
  },
  components: {
    FullscreenHero,
    Navbar
  },
  computed: {
    notScrolled() {
      return !this.$store.state.scrolled
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #fefefe;
  text-shadow: 1px 1px 1px black;
  text-align: center;
}
</style>
