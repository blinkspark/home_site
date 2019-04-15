<template>
  <div class="shadow-sm card my-3">
    <div class="card-header text-center h3">{{title}}</div>
    <div class="card-body">
      <p>{{cdate}}</p>
      <div class="md" v-html="md" ref="md"></div>
      <div v-if="isLogin">
        <n-link class="card-link" :to="localePath({name:'edit',query:{id:_id}})">{{$t('edit')}}</n-link>
        <a class="card-link" href="#" @click="deletePost">{{$t('delete')}}</a>
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
    text: String,
    cdate: String
  },
  mounted() {
    this.$refs.md.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
    // let d = new Date()
    // d.toLocaleDateString
  },
  computed: {
    md() {
      return MD.render(this.text)
    },
    isLogin() {
      return Boolean(this.$store.state.user.accessToken)
    }
  },
  methods: {
    async deletePost(e) {
      e.preventDefault()
      await this.$axios.delete(`/api/posts/${this._id}`)
      location.reload()
    }
  }
}
</script>
