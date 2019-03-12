const pkg = require('./package')

module.exports = {
  mode: 'universal',

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fefefe' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~/assets/common.scss'
  ],

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
            password: 'Password',
            logout: 'Logout',
            title: 'Title',
            delete: 'Delete',
            edit: 'Edit',
          },
          zh: {
            welcome: '欢迎来到我的主页，请向下翻页。',
            home: '主页',
            tools: '工具',
            albums: '相册',
            about: '关于我',
            login: '登录',
            register: '注册',
            password: '密码',
            logout: '注销',
            title: '标题',
            delete: '删除',
            edit: '编辑',
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
