# React学习笔记(1)

作者：Neal Wang _2018年11月9日 16:29_

去年就开始接触React了，只不过好长时间没用，有点遗忘了。今天开始回炉一下React，并顺手记下。

首先是如何创建React项目，如果从头开始的话其实是个很麻烦的事，所以React社区为我们提供了很多工具来新建项目：

  * 如果要从头开始创建单页应用的话那么你的最好的选择就是[Create React App](https://github.com/facebook/create-react-app)
  * 如果你想要制作服务端渲染的React网站那么就必须要试试 [Next.js](https://nextjs.org/),我的博客就是用Next.js制作的。
  * 如果你想做静态网站的话[Gatsby](https://www.gatsbyjs.org/)是你的好选择。
  * [更多](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains)

我们这里就要用到的是[Create React App](https://github.com/facebook/create-react-app)，这个是官方提供的工具，创建项目十分方便:

```
npx create-react-app my-app
cd my-app
npm start
```

是的，你没看错，这里使用的npx是npm新加入的工具，可以直接执行你所需要的工具，免去了你全局安装的烦恼，而且每次使用都是最新版本。
等执行完上述的命令的话应该就会有新的页面弹出来了：

![react hello page](/static/react_hello_page.jpg)

Create React App 为我们隐藏了许多底层的内容，比如Babel，Webpack,还有很多插件。这些又是另一个话题了，我们暂且不讨论，之来看React部分的内容。

既然开始页面让我们试着修改src/App.js那我们就来看看这个文件有什么内容把。

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

很简单，就是继承了一个Component然后在render方法中返回一堆html。这也是React的基本原理，就是使用Javascript在客户端动态生成html并在你载入的页面中渲染出来。这种方式不需要服务器参与且性能非常的高。React的Virtual DOM的性能可比直接操作DOM高的多，所以React生成的App可比手动操作DOM的App性能高上很多哦。

不过App.js并不是这个App真正的入口，真正的入口在app的index.js下：

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

最重要的一句是 `ReactDOM.render(<App />, document.getElementById('root'));`，它告诉React我们要把App这个Component渲染到那个元素下面去。然后我们就可以看看真正的静态页面长什么样了。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>
```

我把里面的注释去掉了，其实这是一个模板，react在打包时还要加入index.js上面的js，然后js调用ReactDOM来渲染html页面然后注入到 `<div id="root"></div>` 元素下面。

如果觉得上面的很复杂的话我们来从头开始创建一个Component然后渲染出来看一看好了。

首先在src目录下创建`Hello.js`，然后输入如下内容

```
import React,{Component} from 'react'

class Hello extends React{
  render(){
    return (
      <h1>Hello</h1>
    )
  }
}

export default Hello
```

或者你也可以简化成下面的内容

```
import React from 'react'
export default () => (
  <h1>Hello</h1>
)
```
然后我们来修改一下src/App.js

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//++++++++++++++++++++++++++++++++++++
import Hello from './Hello'
//++++++++++++++++++++++++++++++++++++


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* //++++++++++++++++++++++++++++++++++++ */}
          <Hello></Hello>
          {/* //++++++++++++++++++++++++++++++++++++ */}
        </header>
      </div>
    );
  }
}

export default App;
```

保存之后我们就能看到结果，连刷新都不需要。

![添加了Hello组件的react hello page](/static/react_hello_page_1.jpg)
