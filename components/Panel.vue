<template>
  <div class="panel">
    <div class="panel-heading">{{title}}</div>
    <a class="panel-block" v-for="item in list" :key="item.id">
      <template v-if="item.type === 'checkbox'">
        <Checkbox>{{item.content}}</Checkbox>
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
  }
};
</script>

<style>
</style>