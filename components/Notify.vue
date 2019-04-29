<template>
  <div class="container">
    <div class="notification" v-for="(item, index) in notifies" :key="index">
      <button class="delete"></button>
      {{item.msg}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notifies() {
      return this.$store.state.notifies
    }
  }
}
</script>
