<template>
  <div class="bg-black text-white px-5 py-2 md:py-4 top-0 z-50">
    <div
      class="mx-auto py-5 md:py-0 text-center"
    >
      <div class="">
        <nav>
          <div class="flex gap-5 justify-evenly">
            <div class="flex flex-col gap-2 md:gap-4 justify-evenly">
              <NuxtLink to="/" class="p-2 hover:text-blue-200">Home</NuxtLink>

              <NuxtLink v-for="text, link in $config.links" :key="link" :to="link" @click.native="show = false"
              class="hover:text-blue-200 p-2" v-html="text" />
            </div>

            <div class="flex flex-col gap-2 md:gap-4 justify-center">
              <div class="italic p-2">Episodes:</div>

              <NuxtLink v-for="text, link in $config.podcast_links" :key="link" :to="link" @click.native="show = false"
              class="hover:text-blue-200 p-2" v-html="text" />
            </div>
          </div>
        </nav>
      </div>

      <div class="mt-5 text-xs">
        Copyright © 2006-{{ $config.year }} Film Junk. All Rights Reserved.
      </div>
    </div>
  </div>
</template>
