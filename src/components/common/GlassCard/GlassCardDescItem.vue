<script setup lang="ts">
const siteSlogan = import.meta.env.VITE_SITE_SLOGAN
const personSlogan = import.meta.env.VITE_PERSON_SLOGAN
</script>

<template>
  <div class="i-bxs-quote-single-left" />
  <div class="my-4 ml-4 mr-auto leading-8">
    <p class="font-800 font-lato">{{ siteSlogan }}</p>
    <p class="font-600">{{ personSlogan }}</p>
  </div>
  <div class="i-bxs-quote-single-right self-end" />
</template>

<style scoped></style>
