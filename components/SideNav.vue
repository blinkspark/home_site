<template>
  <nav :class="classes">
    <slot>
      <a>Placeholder</a>
    </slot>
  </nav>
</template>

<script>
export default {
  props: {
    classes: { type: String, default: '' },
    right: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_defines.scss';
nav {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  box-shadow: 0.1rem 0rem 0.1rem $shadowColor;
  &.right {
    box-shadow: -0.1rem 0rem 0.1rem $shadowColor;
  }
  a{
    color: $black;
    line-height: 3rem;
    padding-left: 1rem;
    &:hover{
      background-color: darken($color: #ffffff7c, $amount: 20%);
    }
  }
}
.sticky {
  position: sticky;
  top: 0px;
}
</style>
