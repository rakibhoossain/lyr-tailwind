import { join } from 'path'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lyr-tailwind',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    exposeConfig: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  //Style resources https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    // your settings here
    sass: ['~assets/sass/global.sass', '~assets/sass/components/*.sass'],
    scss: [],
    less: [],
    stylus: []
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    build: {
      postcss: {
        plugins: {
          tailwindcss: join(__dirname, 'tailwind.config.js'),
          'postcss-pxtorem': {
            propList: ['*', '!border*']
          }
        }
      }
    }
  }
}
