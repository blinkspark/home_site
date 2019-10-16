<template>
  <label class="checkbox" :class="styles">
    <input type="checkbox" :checked="isChecked" />
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "Checkbox" },
    size: { type: Number, default: 5},
    isChecked: { type: Boolean }
  },
  computed: {
    styles: {
      get() {
        return `is-size-${this.size}`;
      }
    }
  }
};
</script>

<style>
</style>