<template>
  <div class="container">
    <transition>
      <fullscreen-hero v-if="notScrolled">
        <h1 class="title">{{$t('welcome')}}</h1>
      </fullscreen-hero>
    </transition>
    <m-navbar/>
    <div class="container">
      <blog-post
        v-for="(item, index) in articles"
        :key="index"
        :id="item._id"
        :title="item.title"
        :text="item.text"
      />
    </div>
  </div>
</template>

<script>
import FullscreenHero from '../../components/FullscreenHero'
import mNavbar from '../../components/mobile/mNavbar'
import BlogPost from '../../components/BlogPost'
export default {
  async fetch({ $axios, store }) {
    try {
      const { data } = await $axios.get(`/api/posts`)
      store.commit('articles', data.articles)
    } catch (error) {
      console.log(error.toString())
    }
  },
  components: {
    FullscreenHero,
    mNavbar,
    BlogPost
  },
  computed: {
    notScrolled() {
      return !this.$store.state.scrolled
    },
    articles() {
      return this.$store.state.articles
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

