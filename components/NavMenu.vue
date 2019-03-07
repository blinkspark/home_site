<template>
  <div class="nav-menu" :class="{right}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    right: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0 1rem;
  &.right {
    margin-left: auto;
  }
}
</style>

