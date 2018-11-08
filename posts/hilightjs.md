# 为代码添加高亮

因为要写技术博客，内容里面很可能要添加代码。但是，平平淡淡的不加修饰总是不太舒服，于是找了一下React里面有没有代码高亮组件。虽然找到了一个叫react-highlight的组件，但是不能支持react-markdown,所以只能用非react的方法了。

直接在pages/_document.js下添加highlight.js的css和js文件

```
<Head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/darcula.min.css" />
  <link rel="stylesheet" href="/static/style.css"></link>
</Head>
<body>
  <Main />
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"></script>
  <NextScript />
</body>
```

添加之后还是不能高亮，因为highlightjs是对code下的.javascript类进行高亮所以还需要手动为markdown下的所有code高亮。

在statics/下创建highlight.js然后输入如下代码
```
$(document).ready(function () {
  $('.markdown pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
})
```

最后在pages/_document.js的NextScript前添加一行
```
<script src="/static/highlight.js"></script>
```

OK！大功告成！