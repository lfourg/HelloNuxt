export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '核桃星球官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '核桃编程来自美国Scratch实验室教研体系，由麻省理工Yasmin Kafai教授、宾夕法尼亚大学认知科学专家曾鹏轩倾力研发，世界机器人大赛冠军王宇航亲授，采用进阶式课堂、游戏化趣味教学，让孩子遵循教育规律快乐学习，激发学习主动性，零基础启蒙到轻松搞定编程！'
      },
      { hid: 'keyword', name: 'keyword', content: '核桃星球,核桃星球官网,在线少儿编程' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
    '~/assets/css/common.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '@/plugins/element-ui' }],
  router: {
    middleware: ['visits']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    extractCSS: { allChunks: true },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
