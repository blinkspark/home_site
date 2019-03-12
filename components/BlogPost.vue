<template>
  <div class="card">
    <h1 class="title">{{title}}</h1>
    <div class="markdown" v-html="md"></div>
    <div class="actions">
      <a href="#" @click="deletePost">{{$t('delete')}}</a>
      <a href="#" @click="editPost">{{$t('edit')}}</a>
    </div>
  </div>
</template>

<script>
import MDI from 'markdown-it'
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
  }
}
</script>

<style lang="scss" scoped>
</style>
