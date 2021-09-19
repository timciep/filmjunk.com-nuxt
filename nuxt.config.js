import webpack from 'webpack';

export default {
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },
  
  publicRuntimeConfig: {
    year: new Date().getFullYear(),

    links: {
      '/filmjunk-podcast': 'Podcast',
      '/gamejunk-podcast': 'Game Junk',
      '/balljunk-podcast': 'Ball Junk',
      '/glossary': 'Glossary',
      '/about': 'About'
    },

    social_links: [
      {
        name: 'Additional Content on Patreon',
        url: 'https://www.patreon.com/filmjunk',
        icon: ['fab', 'patreon'],
      }, {
        name: 'Premium Podcasts on Bandcamp',
        url: 'https://filmjunk.bandcamp.com',
        icon: ['fab', 'bandcamp'],
      }, {
        name: 'Back Episodes on Gumroad',
        url: 'https://filmjunk.gumroad.com',
        icon: ['fas', 'clock']
      }
    ]
  },
  
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Film Junk',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Film Junk' },
      { name: 'format-detection', content: 'telephone=no' }
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
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['title', 'description']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        // $: 'jquery',
        _: 'lodash'
      })
    ]
  },

  fontawesome: {
    icons: {
      solid: [
        'faBars', 'faTimes', 'faClock', 'faBackward', 'faChevronRight', 'faChevronLeft',
        'faAngleDown', 'faLevelDownAlt', 'faPlay', 'faDownload',
      ],
      brands: [
        'faTwitter', 'faDiscord', 'faPatreon', 'faBandcamp', 'faYoutube'
      ]
    }
  }
}
