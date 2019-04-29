<template>
  <div class="shadow-sm card margin-y-1">
    <div class="card-header has-background-light">
      <div class="card-header-title is-centered is-size-4">{{title}}</div>
    </div>
    <div class="card-content">
      <p class="has-text-right has-text-grey">{{cdate}}</p>
      <div class="md" v-html="md" ref="md"></div>
      <p class="margin-y-1">版权所有，转载请注明出处！</p>
    </div>
    <div v-if="isLogin" class="card-footer">
      <n-link class="card-footer-item" :to="localePath({name:'edit',query:{id:_id}})">{{$t('edit')}}</n-link>
      <a class="card-footer-item" href="#" @click="deletePost">{{$t('delete')}}</a>
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
