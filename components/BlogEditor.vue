<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 my-3">
        <textarea class="form-control" rows="15" resize="false" v-model="innerText"></textarea>
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
  data() {
    return { innerTitle: '', innerText: '' }
  },
  props: {
    article: Object
  },
  computed: {
    md() {
      return MD.render(this.innerText)
    }
  },
  mounted() {
    this.innerTitle = this.article.title
    this.innerText = this.article.text
  },
  updated() {
    this.$refs.md.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    async save() {
      try {
        await this.$axios.put(`/api/posts/${this.article._id}`,{
          title:this.innerTitle,
          text:this.innerText
        })
        this.$router.push(this.localePath('index'))
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
