<template>
  <div class="bg-black text-white px-5 py-2 md:py-4 top-0 z-50">
    <div class="max-w-screen-lg mx-auto md:pr-6 flex flex-wrap md:flex-nowrap justify-between items-center">
      <NuxtLink to="/" @click.native="hideMenus">
        <div class="text-xl font-bold uppercase">
          Film Junk
        </div>
      </NuxtLink>

      <div class="md:hidden text-xl">
        <button @click="show = ! show" class="py-2 px-2">
          <font-awesome-icon v-show="! show" :icon="['fas', 'bars']" />
          <font-awesome-icon v-show="show" :icon="['fas', 'times']" />
        </button>
      </div>

      <transition name="slide-down">
        <div v-show="show"
          class="w-full md:w-auto md:flex flex-col md:flex-row items-center gap-20 py-5 md:py-0"
        >
          <div class="">
            <nav>
              <div class="flex flex-col md:flex-row gap-6 md:gap-8 justify-center text-center">
                <div class="mx-auto w-full">
                  <button @click="show_episodes = ! show_episodes">
                    Podcast Episodes
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                  </button>

                  <transition name="slide-down">
                    <div v-show="show_episodes"
                    class="md:absolute w-full md:w-auto md:py-3 mx-auto bg-gray-900 md:bg-black rounded px-3 mt-4 md:mt-0">
                      <NuxtLink :to="link" @click.native="hideMenus"
                      v-for="text, link in $config.podcast_links" :key="link"
                      class="">
                        <div class="mx-auto px-6 py-3 hover:text-blue-200">
                          {{ text }}
                        </div>
                      </NuxtLink>
                    </div>
                  </transition>
                </div>

                <NuxtLink v-for="text, link in $config.links" :key="link" :to="link" @click.native="hideMenus"
                class="hover:text-blue-200" v-html="text" />
              </div>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: window.innerWidth > 767, // tailwind md:
      show_episodes: false,
    };
  },

  methods: {
    hideMenus() {
      if (window.innerWidth <= 767) {
        this.show = false;
      }

      this.show_episodes = false;
    }
  },
};
</script>

<style scoped>
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: max-height 0.3s ease;
  }

  .slide-down-enter-to,
  .slide-down-leave {
    overflow: hidden;
    max-height: 1000px;
  }

  .slide-down-enter,
  .slide-down-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>