<template>
  <div class="container my-5">
    <FileUploader/>
    <FileList :list="list"/>
  </div>
</template>

<script>
import FileUploader from '../components/FileUploader'
import FileList from '../components/FileList'
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/upload')
    const list = res.data.list
    return { list }
  },
  components: {
    FileUploader,
    FileList
  }
}
</script>
