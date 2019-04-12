<template>
  <div>
    <Navbar />
    <nuxt />
    <MyFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import MyFooter from '../components/MyFooter'
export default {
  components: {
    Navbar,MyFooter
  }
}
</script>
