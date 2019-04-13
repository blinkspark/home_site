<template>
  <div class="container">
    <div class="list-group">
      <a
        v-for="(item, index) in list"
        :key="index"
        class="list-group-item list-group-item-action"
        :href="item.href"
      >{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] }
  }
}
</script>
