<template>
  <div class="fullscreen-hero" :style="style" @scroll="onScroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '/img/hero.jpg'
    }
  },
  created() {
    this.style.background = `url(${this.img})`
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.scrollTo(0, 0)
    window.removeEventListener('scroll', this.onScroll)
  },
  data() {
    return {
      style: {
        background: '',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }
    }
  },
  methods: {
    onScroll(e) {
      if (!this.$store.state.scrolled) {
        this.$store.commit('setScrolled', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fullscreen-hero {
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.v-leave {
  min-height: 100vh;
}
.v-leave-active {
  // transition: height 1s ease;
  transition: all 2s;
}
.v-leave-to {
  opacity: 0.5;
  min-height: 0;
  height: 0;
}
</style>
