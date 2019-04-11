<template>
  <div class="container">
    <section v-for="(item, index) in posts" :key="index">
      <blog-post v-bind="item"/>
    </section>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
const defaultObj = { posts: [] }
export default {
  components: { BlogPost },
  data() {
    return defaultObj
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/posts')
    if (data.error) {
      return defaultObj
    } else {
      return {
        posts: data.articles
      }
    }
  }
}
</script>
