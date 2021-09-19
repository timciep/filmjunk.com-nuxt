<template>
  <div class="bg-black text-white px-5 py-2 md:py-4 top-0 z-50">
    <div class="max-w-screen-lg mx-auto md:pr-6 flex flex-wrap md:flex-nowrap justify-between items-center">
      <NuxtLink to="/">
        <div class="text-xl font-bold uppercase">
          Film Junk
        </div>
      </NuxtLink>

      <div class="md:hidden text-xl">
        <button @click="show = ! show" class="py-2 px-4">
          <font-awesome-icon v-show="! show" :icon="['fas', 'bars']" />
          <font-awesome-icon v-show="show" :icon="['fas', 'times']" />
        </button>
      </div>

      <div
        :class="{'hidden': ! show}"
        class="w-full md:w-auto md:flex flex-col md:flex-row items-center gap-20 py-5 md:py-0"
      >
        <div class="">
          <nav>
            <div class="flex flex-col md:flex-row gap-6 md:gap-8 justify-center text-center">
              <NuxtLink v-for="text, link in $config.links" :key="link" :to="link" @click.native="show = false"
              class="hover:text-blue-fj" v-html="text" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
};
</script>