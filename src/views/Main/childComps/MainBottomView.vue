<script setup lang="ts">
const ICP = import.meta.env.VITE_SITE_ICP
const POWER = import.meta.env.VITE_SITE_POWER
const TIME = import.meta.env.VITE_SITE_TIME
</script>

<template>
  <footer
    class="absolute bottom-0 left-0 m-auto h-11 w-full flex items-center bg-[#00000040] text-white"
  >
    <p class="m-auto max-w-xl">
      Copyright {{ TIME }} {{ POWER ? '&' : '' }} {{ POWER }} {{ ICP ? '&' : '' }} {{ ICP }}
    </p>
  </footer>
</template>

<style scoped></style>
