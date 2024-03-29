<template>
   <div>
      <div class="mx-3 md:mx-0 flex justify-between items-center">
         <div>
            <input id="search" placeholder="Search..."
            @input="evt => q = evt.target.value" :value="q"
            class="rounded p-2 bg-white border border-gray-300 max-w-sm" 
            style="max-width: 80%;" />
         </div>

         <div class="text-sm text-gray-700">
            Page {{ p }}
         </div>
      </div>

      <div class="mt-4">
         <ul class="space-y-4">
            <li v-for="article, idx in articles" :key="idx">
               <nuxt-link :to="article.path">
                  <div class="bg-white shadow md:rounded p-3">
                     <div class="flex items-beginning justify-between gap-3">
                        <div class="text-blue-fj hover:opacity-80" v-html="highlight(article.title)" />
                        <div class="text-xs text-gray-800">{{ new Date(article.date).toLocaleDateString() }}</div>
                     </div>

                     <div class="text-sm mt-1" v-html="highlight(article.description)" />
                  </div>
               </nuxt-link>
            </li>
         </ul>
      </div>

      <div class="mt-5 flex justify-between mx-3 text-blue-fj items-center">
         <button @click="prev()" :class="p > 1 ? '' : 'invisible'">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
            Prev
         </button>

         <div class="text-sm text-gray-700">
            Page {{ p }}
         </div>

         <button @click="next()" :class="hasNext ? '' : 'invisible'">
            Next
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
         </button>
      </div>
   </div>
</template>

<script>
const PER_PAGE = 10;

export default {
   props: ['content'],

   data() {
      return {
         articles: [],
         q: '',
         p: this.$route.query.p ? parseInt(this.$route.query.p) : 1,
         hasNext: false,
      }
   },

   async fetch () {
      this.refreshData();
   },

   watch: {
      q () {
         if (this.p === 1) {
            this.updateQueryParams();
            this.refreshData();
         } else {
            this.p = 1;
         }
      },

      p () {
         this.updateQueryParams();
         this.refreshData();
      },
   },

   watchQuery: true,

   methods: {
      async refreshData() {
          let query = this.$content(this.content)
            .only(['title', 'description', 'date', 'path'])
            .limit(PER_PAGE)
            .skip((this.p - 1) * (PER_PAGE - 1));

         if (this.q) {
            query = query.search(this.q);
            // query = query.search('title', this.q)
         } else {
            query = query.sortBy('date', 'desc');
         }

         const result = await query.fetch();

         this.hasNext = result.length === PER_PAGE;

         this.articles = this.hasNext ? result.slice(0, -1) : result;
      },

      updateQueryParams() {
         this.$router.replace({ query: _.pickBy({
            p: this.p,
            q: this.q,
         })}).catch(() => {});
      },

      next() {
         this.p = this.p + 1;
         window.scrollTo(0,0);
      },

      prev() {
         this.p = this.p - 1;
         window.scrollTo(0,0);
      },

      highlight(text) {
         return text.replace(new RegExp(this.q, 'i'), function(match) {
         return '<span class="font-bold bg-yellow-200">' + match + '</span>';
         });
      }
   },
}
</script>