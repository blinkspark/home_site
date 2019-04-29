<template>
  <div class="container">
    <div class="field">
      <label for="op" class="label">Old Password</label>
      <div class="control">
        <input id="op" class="input" type="password" v-model="op">
      </div>
    </div>
    <div class="field">
      <label for="np" class="label">New Password</label>
      <input id="np" class="input" type="password" v-model="np">
    </div>
    <div class="field">
      <label for="np1" class="label">Conform New Password</label>
      <input id="np1" class="input" type="password" v-model="np1">
    </div>
    <div>
      <button class="button is-primary" @click="changePassword">Change Password</button>
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
