<template>
  <footer>
    <slot>
      <p>Copyright 2019 Neal Wang All Rights Reserved.</p>
    </slot>
  </footer>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
@import '../assets/_defines.scss';
footer {
  display: flex;
  flex-flow: row wrap;
  box-shadow: 0 -0.2rem 0.2rem $shadowColor;
  justify-content: center;
  align-items: center;
  background-color: $primalColor;
  color: $white;
}
</style>
