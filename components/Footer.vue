<template>
  <div class="bg-black text-white px-5 py-2 md:py-4 top-0 z-50">
    <div
      class="mx-auto py-5 md:py-0 text-center"
    >
      <div class="">
        <nav>
          <div class="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
            <NuxtLink to="/" class="p-2">Home</NuxtLink>

            <NuxtLink v-for="text, link in $config.links" :key="link" :to="link" @click.native="show = false"
            class="hover:text-blue-fj p-2" v-html="text" />
          </div>
        </nav>
      </div>

      <div class="mt-5 text-xs">
        Copyright © 2006-{{ $config.year }} Film Junk. All Rights Reserved.
      </div>
    </div>
  </div>
</template>
