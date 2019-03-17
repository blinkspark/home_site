<template>
  <div class="card">
    <h1 class="title">{{title}}</h1>
    <div class="markdown" v-html="md" ref="md"></div>
    <div class="actions">
      <a href="#" v-if="authed" @click="deletePost">{{$t('delete')}}</a>
      <a href="#" v-if="authed" @click="editPost">{{$t('edit')}}</a>
      <!-- <a href="#" @click="editPost">{{$t('readMore')}}</a> -->
    </div>
  </div>
</template>

<script>
import MDI from 'markdown-it'
import hljs from 'highlight.js'
const MD = new MDI()
export default {
  props: {
    id: String,
    title: String,
    text: String
  },
  computed: {
    md() {
      return MD.render(this.text)
    },
    authed() {
      if (this.$store.state.user.accessToken && this.id) return true
      return false
    }
  },
  methods: {
    async deletePost(e) {
      e.preventDefault()
      const { data } = await this.$axios.delete(`/api/posts/${this.id}`)
      if (data.ok) {
        this.$store.commit(
          'articles',
          this.$store.state.articles.filter(v => v._id !== this.id)
        )
      }
    },
    editPost(e) {
      e.preventDefault()
      this.$store.commit('editID', this.id)
      this.$router.push(this.localePath('dashboard'))
    }
  },
  mounted() {
    this.$refs.md.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
