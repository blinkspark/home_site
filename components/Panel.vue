<template>
  <div class="panel">
    <div class="panel-heading">{{title}}</div>
    <a class="panel-block" v-for="item in list" :key="item.id" @click="toggle(item.id)">
      <template v-if="item.type === 'checkbox'">
        <Checkbox :isChecked="item.checked">{{item.content}}</Checkbox>
      </template>
      <template v-else>{{item.content}}</template>
    </a>
  </div>
</template>

<script>
import Checkbox from "../components/common/Checkbox";
export default {
  components: {
    Checkbox
  },
  props: {
    title: { type: String, default: "Panel" },
    list: { type: Array }
  },
  methods: {
    toggle(id) {
      this.$store.commit("todos/toggleWishList", id)
      console.log(id)
    }
  }
};
</script>

<style>
</style>