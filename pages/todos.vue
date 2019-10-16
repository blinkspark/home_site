<template>
  <div class="container pa-1">
    <Panel title="Wish List" :list="list0" />
  </div>
</template>

<script>
import Checkbox from "../components/common/Checkbox";
import Panel from "../components/Panel";
export default {
  components: {
    Checkbox,
    Panel
  },
  computed: {
    list0() {
      return this.$store.state.todos.list0;
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>