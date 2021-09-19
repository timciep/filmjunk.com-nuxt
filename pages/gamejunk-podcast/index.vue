<template>
  <div class="max-w-prose mx-auto">
      <div class="mx-3">
          <h1 class="font-bold text-xl">Game Junk Podcast Episodes</h1>
      </div>

      <div class="mt-3 md:mx-3">
        <EpisodeList content="gamejunk-podcast" />
      </div>
  </div>
</template>

<script>
export default {
  head() {
     return {
         title: 'Game Junk Podcast Episodes',
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: 'Game Junk Podcast Episode List',
            }
         ]
     }
  },
}
</script>