<template>
  <div>
    <div class="md:flex flex-wrap align-middle justify-center gap-4 space-y-4 md:space-y-0">
      <div v-for="link, idx in $config.social_links" :key="idx">
        <a :href="link.url">
          <div class="rounded-full py-2 px-4 bg-blue-fj text-white text-center hover:opacity-80">
              <font-awesome-icon :icon="[link.icon[0], link.icon[1]]" />
              {{ link.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
