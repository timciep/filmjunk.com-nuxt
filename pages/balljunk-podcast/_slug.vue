<template>
   <div class="max-w-screen-md mx-auto">
      <div class="mx-3">
         <NuxtLink to="/balljunk-podcast" class="text-blue-fj hover:opacity-80 text-sm">
            Ball Junk Podcast
         </NuxtLink>

         <h1 class="font-bold text-lg mt-1">Ball Junk {{ page.title }}</h1>

         <div class="text-sm text-gray-800 mt-1">{{ new Date(page.date).toLocaleDateString() }}</div>
      </div>

      <div v-html="page.description" class="py-2 px-3 mt-4 md:rounded" />

      <div v-if="page.mp3_link" class="mt-5 mx-3">
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
   </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content('balljunk-podcast', slug)
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
         title: 'Ball Junk ' + this.page.title,
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
