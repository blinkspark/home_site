<template>
  <div class="nav-menu" ref="root">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
@import '../../assets/_defines.scss';
.nav-menu {
  display: flex;
  flex-flow: column nowrap;
  border-bottom: $shadowColor 0.1rem solid;
  a {
    padding-left: 1.5rem;
  }
  &.right {
    margin-left: auto;
  }
}
.v-leave {
  max-height: 100vh;
}
.v-leave-active {
  // transition: height 1s ease;
  transition: all 1s cubic-bezier(0,.9,.4,1);
}
.v-leave-to {
  max-height: 0;
}
.v-enter {
  max-height: 0;
}
.v-enter-to {
  max-height: 100vh;
}
.v-enter-active {
  transition: all 1s cubic-bezier(1, 0.01, 0.97, 0.61);
}
</style>

