<template>
  <div>
    <BlogEditor :article="article"/>
  </div>
</template>

<script>
import BlogEditor from '../components/BlogEditor'
export default {
  async asyncData({ $axios, query }) {
    if (query.id) {
      const res = await $axios.get(`/api/posts/${query.id}`)
      if (res.data.article) return { article: res.data.article }
      return { error: 'article not fount!' }
    } else {
      return {}
    }
  },
  data() {
    return {
      article: {}
    }
  },
  components: {
    BlogEditor
  }
}
</script>
