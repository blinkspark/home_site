<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field">
          <input type="text" class="input" placeholder="Title" v-model="innerTitle">
        </div>
        <div class="field">
        <textarea class="textarea" rows="25" resize="false" v-model="innerText"></textarea>
        </div>
        <div class="field mt-3">
          <button class="button is-primary" @click="save">{{$t('save')}}</button>
        </div>
      </div>
      <div class="column">
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
