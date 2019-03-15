<template>
  <div class="test">
    <navbar/>
    <div class="container">
      <div class="col-15">
        <!-- <side-nav classes="sticky"></side-nav> -->
      </div>
      <div class="col-70">
        <div class="container h">
          <div class="container w100">
            <img class="me" src="/img/me.jpg" alt="me">
          </div>
          <div class="container">
            <p>{{$t('meP1')}}</p>
            <p>{{$t('meP2')}}</p>
            <p>{{$t('meP3')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/mobile/mNavbar'
// import SideNav from '../components/SideNav'
// import Placeholder from '../components/Placeholder'

export default {
  components: {
    Navbar
    // SideNav,
    // Placeholder
  },
  computed: {
    notScrolled() {
      return !this.$store.state.scrolled
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_defines.scss';
.title {
  color: $white;
  text-shadow: 1px 1px 1px $black;
  text-align: center;
}
.container {
  @include make-container();
}
.h {
  min-height: 87vh;
  padding:0.5rem;

}
.me {
  box-shadow: 0.1rem 0.1rem 0.15rem $shadowColor;
  margin: auto;
}
.w100{
  width: 100%;
}
</style>
