<template>
  <div class="max-w-prose mx-auto">
    <div class="mx-2 md:mx-0">
      <h1 class="font-bold text-xl">Film Junk Podcast Episodes</h1>

      <div class="mt-2">
        <input id="search" v-model="q" placeholder="Search..." 
        class="rounded p-2 bg-gray-100 border border-gray-300" />
      </div>
    </div>

    <div class="mt-3">
        <ul class="space-y-3">
          <li v-for="article, idx in articles" :key="idx">
            <nuxt-link :to="article.path">
              <div class="bg-gray-200 md:rounded py-2 px-3">
                <div class="flex items-beginning justify-between gap-3">
                  <div class="text-blue-900 hover:text-blue-700">{{ article.title }}</div>
                  <div class="text-xs text-gray-800">{{ new Date(article.date).toLocaleDateString() }}</div>
                </div>

                <div class="text-sm mt-1">
                  {{ article.description.substring(0, 150) }}...
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    const q = route.query.q
    let query = $content('filmjunk-podcast')
      .sortBy('date', 'desc')
    if (q) {
      query = query.search(q)
      // OR query = query.search('title', q)
    }
    const articles = await query.fetch()
    return {
      q,
      articles
    }
  },
  watch: {
    q () {
      this.$router.replace({ query: this.q ? { q: this.q } : undefined }).catch(() => { })
    }
  },
  watchQuery: true,

  head() {
     return {
         title: 'Film Junk Podcast Episodes',
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: 'Film Junk Podcast Episode List',
            }
         ]
     }
  },
}
</script>