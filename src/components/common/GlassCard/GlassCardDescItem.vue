<script setup lang="ts">
interface Props {
  siteSlogan?: string
  personSlogan?: string
}
const { siteSlogan, personSlogan } = defineProps<Props>()
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
