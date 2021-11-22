const path = require('path')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'TJournal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './static/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/scss/index.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/editor.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
