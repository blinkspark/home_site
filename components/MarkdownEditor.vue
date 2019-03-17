<template>
  <div class="editor">
    <div class="container">
      <div class="col-50">
        <h2>Editor</h2>
        <input class="input" type="text" v-model="title" :placeholder="$t('title')">
        <textarea rows="20" v-model="text"></textarea>
        <div class="btn-group between">
          <button class="primal" @click="save">Save</button>
        </div>
      </div>
      <div class="col-50">
        <div class="container mx-1" style="height:100%;">
          <div class="preview">
            <div class="markdown" v-html="md" ref="md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MDI from 'markdown-it'
import hljs from 'highlight.js'
const md = new MDI()
export default {
  props: {
    id: { type: String, default: '' }
  },
  data() {
    return {
      text: '',
      title: ''
    }
  },
  computed: {
    md() {
      return md.render(this.text)
    }
  },
  mounted() {
    if (this.id !== '') {
      const article = this.$store.state.articles.find(v => v._id === this.id)
      if (article) {
        this.text = article.text
        this.title = article.title
      }
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
        let result = null
        if (this.id === '') {
          const { data } = await this.$axios.post('/api/posts', {
            user: this.$store.state.user,
            title: this.title,
            text: this.text
          })
          result = data
        } else {
          const { data } = await this.$axios.put(`/api/posts/${this.id}`, {
            user: this.$store.state.user,
            title: this.title,
            text: this.text
          })
          result = data
        }
        console.log(result)

        if (result.ok) {
          this.$store.commit('editID', '')
          this.$router.push(this.localePath('index'))
        }
      } catch (error) {
        console.log(error.toString())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_defines.scss';
.editor {
  width: 100%;
  .col-50 {
    @include make-col(50%);
  }
  & > .container {
    align-items: stretch;
  }
}
.preview {
  @include shadow($shadowColor);
  width: 100%;
  height: 100%;
}
textarea {
  width: 100%;
}
.mx-1 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>

