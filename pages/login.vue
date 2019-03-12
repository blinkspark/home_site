<template>
  <div class="root">
    <login-panel/>
  </div>
</template>

<script>
import LoginPanel from '../components/LoginPanel'
export default {
  components: {
    LoginPanel
  }
}
</script>

<style lang="scss" scoped>
.root {
  min-height: 100vh;
  background-color: rgb(84, 96, 124);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

