<template>
  <div class="test">
    <transition>
      <fullscreen-hero v-if="notScrolled">
        <h1 class="title">Welcom to my world! Scroll to find more!</h1>
      </fullscreen-hero>
    </transition>
    <p>Hello</p>
  </div>
</template>

<script>
import FullscreenHero from '../components/FullscreenHero'

export default {
  components: {
    FullscreenHero
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
