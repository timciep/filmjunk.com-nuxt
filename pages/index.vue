<template>
   <div>
      <div class="flex w-full max-w-screen-lg px-4 mx-auto">
         <div class="flex-grow items-center hidden sm:flex">
            <div class="w-full">
               <hr class="border-3 rounded border-purple-fj">
            </div>
         </div>

         <img src="/img/fj-logo.jpg" alt="Film Junk" class="w-full sm:w-32 mx-5">

         <div class="flex-grow items-center hidden sm:flex">
            <div class="w-full">
               <hr class="border-3 rounded border-purple-fj">
            </div>
         </div>
      </div>

      <div class="mt-6 max-w-screen-lg mx-auto px-4">
         <SocialBig />
      </div>

      <div class="max-w-prose mx-auto mt-6">
         <h2 class="font-bold text-xl mx-2 md:mx-0">Latest Episodes</h2>

         <div class="mt-3">
            <ul class="space-y-3">
               <li v-for="article, idx in articles" :key="idx">
                  <nuxt-link :to="article.path">
                     <div class="bg-gray-200 md:rounded py-2 px-3">
                           <div class="flex items-beginning justify-between">
                                 <div class="text-sm text-gray-800">
                                       <span v-if="'/filmjunk-podcast' === article.dir">🎥</span>
                                       <span v-if="'/gamejunk-podcast' === article.dir">🎮</span>
                                       <span v-if="'/balljunk-podcast' === article.dir">🏀</span>

                                       <span class="italic">
                                          {{ article.type }}
                                       </span>
                                 </div>

                                 <div class="text-xs text-gray-800">{{ new Date(article.date).toLocaleDateString() }}</div>
                           </div>

                           <div class="mt-1">
                              <div class="text-blue-fj hover:text-purple-fj">{{ article.title }}</div>
                           </div>
                     </div>
                  </nuxt-link>
               </li>
            </ul>
         </div>
   </div>
   </div>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    let query = $content(null, { deep: true })
      .sortBy('date', 'desc')
   
    const articles = await query.fetch()
    return {
      articles
    }
  },
}
</script>