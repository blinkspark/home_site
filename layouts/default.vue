<template>
  <div>
    <Navbar />
    <Notify />
    <nuxt />
    <MyFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import MyFooter from '../components/MyFooter'
import Notify from '../components/Notify'
export default {
  components: {
    Navbar,MyFooter,Notify
  }
}
</script>
