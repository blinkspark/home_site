<template>
  <div class="panel margin-y-1">
    <div class="panel-heading">File List</div>
    <FileListItem v-for="(item, index) in list" :key="index" v-bind="item"/>
  </div>
</template>

<script>
import FileListItem from '../components/FileListItem'
export default {
  components: {
    FileListItem
  },
  props: {
    list: { type: Array, default: () => [] }
  }
}
</script>
