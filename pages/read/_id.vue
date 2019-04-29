<template>
  <div class="container">
    <BlogPost v-bind="article"/>
  </div>
</template>

<script>
import BlogPost from '../../components/BlogPost'
export default {
  async asyncData({ params, $axios, $store }) {
    try {
      const { data } = await $axios.get(`/api/posts/${params.id}`)
      console.log(data)
      if (data.error) {
        $store.dispatch('addNotify', data.error)
      } else {
        return {
          article: data.article
        }
      }
    } catch (error) {
      $store.dispatch('addNotify', error.toString())
    }
    return {}
  },
  components: {
    BlogPost
  },
  data() {
    return {
      article: 'Hello'
    }
  }
}
</script>
