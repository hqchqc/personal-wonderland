<script setup lang="ts">
interface Props {
  linkName: string
  linkIcon: string
}
const { linkName, linkIcon } = defineProps<Props>()
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <span :class="linkIcon" class="text-3xl" />
    <span class="ml-2 text-[1.1rem]">{{ linkName }}</span>
  </div>
</template>

<style scoped></style>
