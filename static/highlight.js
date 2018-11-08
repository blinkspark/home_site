$(document).ready(function () {
  $('.markdown pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
})