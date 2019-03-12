<template>
  <div class="test">
    <navbar/>
    <div class="container">
      <div class="col-15">
        <side-nav classes="sticky">
          <nuxt-link to="#">Editor</nuxt-link>
        </side-nav>
      </div>
      <div class="col-70">
        <div class="container ma-1">
          <markdown-editor :id="$store.state.editID"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import MarkdownEditor from '../components/MarkdownEditor'

export default {
  components: {
    Navbar,
    SideNav,
    MarkdownEditor
  },
  computed: {
    notScrolled() {
      return !this.$store.state.scrolled
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_defines.scss';
.title {
  color: $white;
  text-shadow: 1px 1px 1px $black;
  text-align: center;
}
.container {
  @include make-container();
}
.col-70 {
  @include make-col($width: 70%);
}
.col-15 {
  @include make-col($width: 15%);
}
.ma-1 {
  @include my(1rem);
  @include mx(1rem);
}
</style>
