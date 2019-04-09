const pkg = require('./package')

module.exports = {
  mode: 'universal',

  // router: {
  //   middleware: 'mobile'
  // },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Neal Wang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website about my skills.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' },
      // { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/highlight.js@9.15.6/styles/darcula.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/combine/npm/jquery@3.3.1/dist/jquery.slim.min.js,npm/bootstrap@4.3.1/dist/js/bootstrap.bundle.min.js', async: true, defer: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fefefe' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [{ code: 'en', iso: 'en-US' }, { code: 'zh', iso: 'zh-CN' }],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        // If enabled, a cookie is set once a user has been redirected to his
        // preferred language to prevent subsequent redirections
        // Set to false to redirect every time
        useCookie: false,
        // Cookie name
        cookieKey: 'i18n_redirected',
        // Set to always redirect to value stored in the cookie, not just once
        alwaysRedirect: true,
        // If no locale for the browsers locale is a match, use this one as a fallback
        fallbackLocale: null
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            welcome: 'Welcom to my world! Scroll to find more!',
            home: 'Home',
            tools: 'Tools',
            albums: 'Albums',
            about: 'About Me',
            login: 'Login',
            register: 'Register',
            email: 'Email',
            password: 'Password',
            logout: 'Logout',
            title: 'Title',
            delete: 'Delete',
            edit: 'Edit',
            readMore: 'Read More',
            meP1: "I am a full stack engineer from China. I used to be a C++ programer for 5 years, mainly worked for UI and server.",
            meP2: "I taught myself Node.js, html5+css3+js, React and Vue these years, and made this site using Nuxtjs -- a Vue SSR framework, and express.",
            meP3: "I am ready for frontend, backend or fullstack jobs, and I can also make mobile apps using Flutter.",
          },
          zh: {
            welcome: '欢迎来到我的主页，请向下翻页。',
            home: '主页',
            tools: '工具',
            albums: '相册',
            about: '关于我',
            login: '登录',
            register: '注册',
            email: 'Email',
            password: '密码',
            logout: '注销',
            title: '标题',
            delete: '删除',
            edit: '编辑',
            readMore: '查看全文',
            meP1: "我是一名来自中国的全栈工程师，有5年的C++工程师经验，主要是做UI和服务器。",
            meP2: "最近，我自学了Node.js html5 css3 JavaScript React 和 Vue。并且用NuxtJs和Express制作了这个网站。",
            meP3: "我可以做前段，后端，和全栈的工作，并且可以用Flutter来做手机APP。",
          }
        }
      }
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
