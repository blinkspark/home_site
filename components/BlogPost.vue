<template>
  <div class="shadow-sm card my-3">
    <div class="card-header text-center h3">{{title}}</div>
    <div class="card-body">
      <div class="md" v-html="md" ref="md"></div>
      <div v-if="isLogin">
        <a class="card-link" :href="`/edit?id=${_id}`">{{$t('edit')}}</a>
        <a class="card-link" href="#">{{$t('delete')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import MDI from 'markdown-it'
import hljs from 'highlight.js'
const MD = new MDI({
  html: true,
  linkify: true,
  typographer: true
})
export default {
  props: {
    _id: String,
    title: String,
    text: String
  },
  mounted() {
    this.$refs.md.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  },
  computed: {
    md() {
      return MD.render(this.text)
    },
    isLogin() {
      return Boolean(this.$store.state.user.accessToken)
    }
  }
}
</script>
