<template>
  <div class="container">
    <div class="form-group">
      <label for="op">Old Password</label>
      <input id="op" class="form-control" type="password" v-model="op">
    </div>
    <div class="form-group">
      <label for="np">New Password</label>
      <input id="np" class="form-control" type="password" v-model="np">
    </div>
    <div class="form-group">
      <label for="np1">Conform New Password</label>
      <input id="np1" class="form-control" type="password" v-model="np1">
    </div>
    <div>
      <button class="btn btn-primary" @click="changePassword">Change Password</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      op: '',
      np: '',
      np1: ''
    }
  },
  methods: {
    async changePassword() {
      if (this.np1 !== this.np) {
        this.$store.dispatch('addNotify', 'New password not match.')
        return
      }
      try {
        const res = await this.$axios.post('/api/changepassword', {
          op: this.op,
          np: this.np
        })
        if (res.data.ok) {
          this.$store.dispatch('addNotify', 'Password changed.')
        } else {
          this.$store.dispatch('addNotify', res.data.error)
        }
      } catch (error) {
        this.$store.dispatch('addNotify', error.toString())
      }
    }
  }
}
</script>
