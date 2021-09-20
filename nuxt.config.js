import webpack from 'webpack';

export default {
  // vue: {
  //   config: {
  //     productionTip: true,
  //     devtools: true
  //   }
  // },
  
  publicRuntimeConfig: {
    year: new Date().getFullYear(),

    links: {
      
      '/subscribe': 'Subscribe',
      '/follow': 'Follow',
      '/glossary': 'Glossary',
      '/about': 'About',
    },

    podcast_links: {
      '/filmjunk-podcast': 'Film Junk',
      '/gamejunk-podcast': 'Game Junk',
      '/balljunk-podcast': 'Ball Junk',
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
    ],

    social_links_filmjunk: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/filmjunk',
        icon: ['fab', 'twitter'],
      }, {
        name: 'Instagram',
        url: 'https://instagram.com/filmjunkpodcast',
        icon: ['fab', 'instagram'],
      }, {
        name: 'Reddit',
        url: 'https://reddit.com/r/filmjunk',
        icon: ['fab', 'reddit'],
      }, {
        name: 'Discord',
        url: 'https://discord.gg/HBKVk6z',
        icon: ['fab', 'discord'],
      }, {
        name: 'Bandcamp',
        url: 'https://filmjunk.bandcamp.com',
        icon: ['fab', 'bandcamp'],
      }, {
        name: 'Patreon',
        url: 'https://www.patreon.com/filmjunk',
        icon: ['fab', 'patreon'],
      }
    ],

    social_links_gamejunk: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/gamejunkpodcast',
        icon: ['fab', 'twitter'],
      }, {
        name: 'YouTube',
        url: 'https://www.youtube.com/c/gamejunk',
        icon: ['fab', 'youtube'],
      }, {
        name: 'Discord',
        url: 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjQ1SmN5ZWFwY040TmU3U054YlpvT19GU2tyd3xBQ3Jtc0ttUnBfOTFoWHkxeVNfaG8tSFVDcDhGeXJKcUFFaXhLUXpoa19zNnRTSTVMMEF6TV9GVk9XTUtLWHBTczdremV2QTN2TkhBQV81NlNhaE55TjVCN0cxS29XQnQwbXZ3OW9SOTdwZXRONUx0NFFFdlAzQQ&q=https%3A%2F%2Fdiscord.gg%2Fx8PU2Gk',
        icon: ['fab', 'discord'],
      }, 
    ],

    social_links_balljunk: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/balljunkpodcast',
        icon: ['fab', 'twitter'],
      }, {
        name: 'Instagram',
        url: 'https://www.instagram.com/balljunkpodcast',
        icon: ['fab', 'instagram'],
      }
    ],
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
        'faSpotify', 'faApple', 'faGoogle', 'faReddit', 'faInstagram',
      ]
    }
  }
}
