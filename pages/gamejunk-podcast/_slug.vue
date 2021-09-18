<template>
   <div class="max-w-screen-md mx-auto">
      <div class="mx-2">
         <NuxtLink to="/gamejunk-podcast" class="text-blue-800 hover:text-blue-500 text-sm">
            Game Junk Podcast
         </NuxtLink>

         <h1 class="font-bold text-lg mt-1">Game Junk {{ page.title }}</h1>

         <div class="text-sm text-gray-800 mt-1">{{ new Date(page.date).toLocaleDateString() }}</div>
      </div>

      <div v-html="page.description" class="py-2 px-3 mt-4 md:rounded" />

      <div class="space-y-1 mt-3 mx-2">
         <div v-if="page.mp3_link" class="">
            <a :href="page.mp3_link" target="_blank" class="text-blue-800 hover:text-blue-500">
               Play/Download MP3
            </a>
         </div>

         <div>
            <a href="http://youtube.com/c/gamejunk" class="text-blue-800 hover:text-blue-500">
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
