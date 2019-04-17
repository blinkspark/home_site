<template>
  <div class="container">
    <div class="list-group">
      <a v-for="(item, index) in list" :key="index" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <span>{{item.name}}</span>
          <div class="btn-group">
            <a class="btn btn-success">{{$t('save')}}</a>
            <button class="btn btn-warning" @click="rename">{{$t('rename')}}</button>
            <button class="btn btn-danger" @click="deleteItem(item.name)">
              {{$t('delete')}}
            </button>
          </div>
        </div>
      </a>
    </div>
    <RenameDialog ref="modal" />
  </div>
</template>

<script>
import RenameDialog from '../components/RenameDialog'
export default {
  components:{
    RenameDialog
  },
  props: {
    list: { type: Array, default: () => [] }
  },
  methods: {
    async deleteItem(name) {
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
    },
    rename(){
      this.$refs.modal.toggle() 
    }
  }
}
</script>
