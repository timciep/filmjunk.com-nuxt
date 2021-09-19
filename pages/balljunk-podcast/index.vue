<template>
  <div class="max-w-prose mx-auto">
      <div class="mx-3">
          <h1 class="font-bold text-xl">Ball Junk Podcast Episodes</h1>
      </div>

      <div class="mt-3 md:mx-3">
        <EpisodeList content="balljunk-podcast" />
      </div>
  </div>
</template>

<script>
export default {
  head() {
     return {
         title: 'Ball Junk Podcast Episodes',
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: 'Ball Junk Podcast Episode List',
            }
         ]
     }
  },
}
</script>