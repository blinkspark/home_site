<template>
  <div>
    <BlogEditor :article="article"/>
  </div>
</template>

<script>
import BlogEditor from '../components/BlogEditor'
export default {
  async asyncData({ $axios, query }) {
    const res = await $axios.get(`/api/posts/${query.id}`)
    if (res.data.article) return { article: res.data.article }
    return { error: 'article not fount!' }
  },
  components: {
    BlogEditor
  }
}
</script>
