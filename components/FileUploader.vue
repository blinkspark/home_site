<template>
  <div class="container mb-5">
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
      if (files.length === 0) {
        this.$store.dispatch('addNotify','Need to select a file.')
        return
      }
      const formData = new FormData()
      for (const f of files) {
        formData.append(f.name, f)
      }
      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      this.$axios
        .post('/api/upload', formData, config)
        .then(() => {
          this.$router.push(this.localePath('index'))
        })
        .catch(e => this.$store.dispatch('addNotify', e.toString()))
    }
  }
}
</script>
