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
      '/about': 'About',
      '/subscribe': 'Subscribe'
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
    ],

    subscribe_links_filmjunk: [
      {
        name: 'RSS',
        url: 'http://feeds.feedburner.com/filmjunk',
        icon: ['fas', 'rss'],
      }, {
        name: 'Spotify',
        url: 'https://open.spotify.com/show/7gC4H6NxbAnQLB7ahS5u2P',
        icon: ['fab', 'spotify'],
      }, {
        name: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/ca/podcast/film-junk-podcast/id74257105',
        icon: ['fab', 'apple'],
      }, {
        name: 'Google Podcasts',
        url: 'https://www.google.com/podcasts?feed=aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL2ZpbG1qdW5r',
        icon: ['fab', 'google'],
      }, {
        name: 'Stitcher',
        url: 'https://www.stitcher.com/podcast/film-junk-podcast',
        icon: ['fas', 'music'],
      }, 
    ],

    subscribe_links_gamejunk: [
      {
        name: 'RSS',
        url: 'http://feeds.feedburner.com/GameJunkPodcast',
        icon: ['fas', 'rss'],
      }, {
        name: 'Spotify',
        url: 'https://open.spotify.com/show/78QyrLbDBY1oNiQzceAIwP',
        icon: ['fab', 'spotify'],
      }, {
        name: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/game-junk-podcast/id385273911',
        icon: ['fab', 'apple'],
      }, {
        name: 'Google Podcasts',
        url: 'https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL0dhbWVKdW5rUG9kY2FzdA',
        icon: ['fab', 'google'],
      }, {
        name: 'Stitcher',
        url: 'https://www.stitcher.com/show/game-junk-podcast',
        icon: ['fas', 'music'],
      }, {
        name: 'YouTube',
        url: 'https://www.youtube.com/c/gamejunk',
        icon: ['fab', 'youtube'],
      }, 
    ],

    subscribe_links_balljunk: [
      {
        name: 'RSS',
        url: 'http://feeds.feedburner.com/BallJunkPodcast',
        icon: ['fas', 'rss'],
      }, {
        name: 'Spotify',
        url: 'https://open.spotify.com/show/1oeuu9Naaubbag6HgbDtTH?si=zQ-FRy31S8qXIwZ89THecg&dl_branch=1',
        icon: ['fab', 'spotify'],
      }, {
        name: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/ball-junk-podcast/id640537508',
        icon: ['fab', 'apple'],
      }, {
        name: 'Google Podcasts',
        url: 'https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL0JhbGxKdW5rUG9kY2FzdA',
        icon: ['fab', 'google'],
      }, {
        name: 'Stitcher',
        url: 'https://www.stitcher.com/show/ball-junk',
        icon: ['fas', 'music'],
      }, 
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
        'faAngleDown', 'faLevelDownAlt', 'faPlay', 'faDownload', 'faMusic', 'faRss'
      ],
      brands: [
        'faTwitter', 'faDiscord', 'faPatreon', 'faBandcamp', 'faYoutube',
        'faSpotify', 'faApple', 'faGoogle',
      ]
    }
  }
}
