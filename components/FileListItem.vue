<template>
  <div class="panel-block is-space-between">
    <div class="control is-marginless" v-if="isRenaming">
      <input type="text" class="input" v-model="renameInput">
    </div>
    <a :href="href" v-else>{{name}}</a>
    <!-------->
    <div>
      <button class="button is-info" @click="rename">Rename</button>
      <button class="button is-danger" @click="deleteItem(name)" v-if="!isRenaming">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    href: String
  },
  data() {
    return {
      isRenaming: false,
      renameInput: ''
    }
  },
  mounted() {
    this.renameInput = this.name
  },
  methods: {
    async deleteItem(name) {
      const confirm = window.confirm(`Do you want to delete ${name}?`)
      if (confirm) {
        try {
          const res = await this.$axios.delete(`/api/upload/${name}`)
          if (res.data.ok) {
            location.reload()
          } else {
            throw res.data.error
          }
        } catch (error) {
          this.$store.dispatch('addNotify', error)
        }
      }
    },
    async rename() {
      if (this.isRenaming && this.name !== this.renameInput) {
        try {
          const res = await this.$axios.post('/api/upload/rename', {
            oldName: this.name,
            newName: this.renameInput
          })
          if (res.data.ok) {
            location.reload()
          }
        } catch (error) {
          this.$store.dispatch('addNotify', error.toString())
        }
      }
      this.isRenaming = !this.isRenaming
    }
  }
}
</script>
