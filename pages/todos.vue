<template>
  <div class="container pa-1">
    <Panel title="Wish List" :list="wishList" />
    <Panel title="Todo List" :list="todos" />
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
    wishList() {
      return this.$store.state.todos.wishList;
    },
    todos() {
      return this.$store.state.todos.todos;
    }
  },
  data() {
    return {};
  },
  fetch(){
    console.log("fetch")
  }
};
</script>

<style>
</style>