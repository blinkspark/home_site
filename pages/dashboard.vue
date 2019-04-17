<template>
  <dir class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="list-group">
          <a
            v-for="(item, i) in items"
            :key="i"
            class="list-group-item list-group-item-action"
            :class="{active:index===i}"
            @click="itemClicked(i)"
            href="#"
          >{{item}}</a>
        </div>
      </div>
      <div class="col-md-9 col-sm-12">
        <keep-alive>
          <component :is="comp"></component>
        </keep-alive>
      </div>
    </div>
  </dir>
</template>

<script>
import BlogEditor from '../components/BlogEditor'
import ChangePassword from '../components/ChangePassword'
export default {
  async asyncData({ $axios, query }) {
    if (query.id) {
      const res = await $axios.get(`/api/posts/${query.id}`)
      if (res.data.article) return { article: res.data.article }
      return { error: 'article not fount!' }
    } else {
      return {}
    }
  },
  data() {
    return {
      index: 0,
      items: ['Editor', 'Change Password'],
      article: {}
    }
  },
  computed: {
    comp() {
      switch (this.index) {
        case 0:
          return BlogEditor
        case 1:
          return ChangePassword
        default:
          return BlogEditor
      }
    }
  },
  methods: {
    itemClicked(i) {
      this.index = i
    }
  },
  components: {
    BlogEditor
  }
}
</script>















