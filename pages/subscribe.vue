<template>
   <div class="max-w-screen-md md:mx-auto mx-3">
      <h1 class="text-2xl font-bold text-center">Subscribe</h1>

      <div class="md:grid grid-cols-3 gap-6 mt-5">
         <div v-for="links, name in link_groups" :key="name" class="mt-6 md:mt-0">
            <h2 class="text-center text-lg font-bold" v-html="name" />

            <div>
               <div v-for="link, idx in links.links" :key="idx"
               class="">
                  <a :href="link.url">
                     <div class="rounded-full py-2 px-4 text-white text-center hover:opacity-80 mt-2"
                     :class="links.bg">
                        <font-awesome-icon :icon="[link.icon[0], link.icon[1]]" />
                        {{ link.name }}
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         link_groups: {
            'Film Junk': {
               links: this.$config.subscribe_links_filmjunk,
               bg: 'bg-blue-fj',
            },
            'Game Junk': {
               links: this.$config.subscribe_links_gamejunk,
               bg: 'bg-blue-gj'
            },
            'Ball Junk': {
               links: this.$config.subscribe_links_balljunk,
               bg: 'bg-brown-bj'
            }
         }
      }
   },
}
</script>