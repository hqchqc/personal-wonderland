<script setup lang="ts">
const siteName = import.meta.env.VITE_SITE_NAME
</script>

<template>
  <div class="max-w-115 flex items-center">
    <div class="i-streamline-emojis-winking-face text-9xl" />
    <div class="pl-4 text-6xl font-900 font-title">{{ siteName }}</div>
  </div>
</template>

<style scoped></style>
