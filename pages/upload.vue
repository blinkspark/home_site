<template>
  <div class="container my-5">
    <div class="form-group">
      <input class="form-control-file" ref="files" type="file" multiple>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="upload">{{$t('upload')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    upload() {
      const files = this.$refs.files.files
      console.log(files)
      this.$store.dispatch('addNotify', 'Hello')
    }
  }
}
</script>
