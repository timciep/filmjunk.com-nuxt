<template>
   <div class="max-w-screen-md mx-auto">
      <div class="mx-3">
         <NuxtLink to="/gamejunk-podcast" class="text-blue-fj hover:opacity-80 text-sm">
            Game Junk Podcast
         </NuxtLink>

         <h1 class="font-bold text-lg mt-1">Game Junk {{ page.title }}</h1>

         <div class="text-sm text-gray-800 mt-1">{{ new Date(page.date).toLocaleDateString() }}</div>
      </div>

      <div v-html="page.description" class="py-2 px-3 mt-4 md:rounded" />

      <div class="space-y-3 mt-5 mx-3">
         <div v-if="page.mp3_link" class="">
            <div class="">
               <audio
                  class="w-full"
                  controls
                  :src="page.mp3_link">
                     Your browser does not support the
                     <code>audio</code> element.
               </audio>
            </div>

            <div class="mt-3">
               <a :href="page.mp3_link" target="_blank" class="text-blue-fj hover:opacity-80">
                  <font-awesome-icon :icon="['fas', 'download']" />
                  Download Episode
               </a>
            </div>
         </div>

         <div>
            <a href="http://youtube.com/c/gamejunk" class="text-blue-fj hover:opacity-80">
               <font-awesome-icon :icon="['fab', 'youtube']" />
               Subscribe on YouTube
            </a>
         </div>
      </div>
   </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content('gamejunk-podcast', slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  },

  head() {
     return {
         title: 'Game Junk ' + this.page.title,
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: this.page.description,
            }
         ]
     }
  }
};
</script>
