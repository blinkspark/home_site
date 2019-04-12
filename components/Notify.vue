<template>
  <div class="container">
    <div
      v-for="item in notifies"
      :key="item.id"
      class="alert alert-warning my-2 show fade"
      role="alert"
    >
      {{item.msg}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
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
