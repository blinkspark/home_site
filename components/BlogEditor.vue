<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 my-3">
        <textarea class="form-control" rows="15" resize="false"></textarea>
      </div>
      <div class="col-md-6 col-sm-12 my-3">
        <div class="md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MDI from 'markdown-it'
import hljs from 'highlight.js'
const MD = new MDI({
  html: true,
  linkify: true,
  typographer: true
})
console.log(hljs)
console.log(MD)
export default {}
</script>
