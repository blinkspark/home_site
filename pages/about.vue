<template>
  <div class="test">
    <navbar/>
    <div class="container">
      <side-nav classes="col-15 sticky"></side-nav>
      <div class="col-70">
        <div style="padding:0 1rem;">
          <placeholder/>
          <placeholder/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Placeholder from '../components/Placeholder'

export default {
  components: {
    Navbar,
    SideNav,
    Placeholder
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
  align-items: flex-start;
}
.col-70 {
  @include make-col($width: 70%);
}
.col-15 {
  @include make-col($width: 15%);
}
</style>
