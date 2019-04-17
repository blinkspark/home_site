<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 my-3">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Title" v-model="innerTitle">
        </div>
        <div class="form-group">
        <textarea class="form-control" rows="25" resize="false" v-model="innerText"></textarea>
        </div>
        <div class="form-group mt-3">
          <button class="btn btn-success" @click="save">{{$t('save')}}</button>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 my-3">
        <div class="md" ref="md" v-html="md"></div>
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
    article: { type: Object, default: () => ({}) }
  },
  data() {
    return { innerTitle: '', innerText: '' }
  },
  computed: {
    md() {
      return MD.render(this.innerText)
    }
  },
  mounted() {
    if (this.article._id) {
      this.innerTitle = this.article.title
      this.innerText = this.article.text
    }
  },
  updated() {
    this.$refs.md.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    async save() {
      try {
        if (this.article._id) {
          await this.$axios.put(`/api/posts/${this.article._id}`, {
            title: this.innerTitle,
            text: this.innerText
          })
        }else{
          console.log('here')
          await this.$axios.post(`/api/posts`, {
            title: this.innerTitle,
            text: this.innerText
          })
        }
        this.$router.push(this.localePath('index'))
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
