<template>
  <div class="test">
    <transition>
      <fullscreen-hero v-if="notScrolled">
        <h1 class="title">{{$t('welcome')}}</h1>
      </fullscreen-hero>
    </transition>
    <navbar/>
    <div class="container">
      <div class="col-15">
        <!-- <side-nav classes="sticky"></side-nav> -->
      </div>
      <div class="col-70">
        <div>
          <blog-post
            v-for="(item, index) in articles"
            :key="index"
            :id="item._id"
            :title="item.title"
            :text="item.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullscreenHero from '../components/FullscreenHero'
import Navbar from '../components/Navbar'
// import SideNav from '../components/SideNav'
import BlogPost from '../components/BlogPost'

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
    Navbar,
    // SideNav,
    BlogPost
  },
  computed: {
    notScrolled() {
      return !this.$store.state.scrolled
    },
    articles() {
      return this.$store.state.articles
    }
  },
  middleware: ['mobile']
}
</script>

<style lang="scss" scoped>
@import '../assets/_defines.scss';
.container {
  @include make-container();
  align-items: flex-start;
}
.col-70 {
  @include make-col($width: 70%);
}
.col-15 {
  @include make-col($width: 15%);
}
</style>
