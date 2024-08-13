<script setup lang="ts">
import { ref } from 'vue'

const socialTip = ref('通过这里联系我吧')
const socialLinks = JSON.parse(import.meta.env.VITE_SOCIAL_LINKS)
</script>

<template>
  <div
    class="group mt-4 max-w-115 w-full flex items-center justify-between rounded-md py-3 transition duration-300 hover:bg-[#00000040]"
  >
    <div class="flex items-center justify-center">
      <a
        v-for="socialItem in socialLinks"
        :key="socialItem.name"
        class="h-6 w-12 transition-transform duration-200 hover:scale-130"
        :class="socialItem.icon"
        :href="socialItem.url"
        target="_blank"
        @mouseleave="socialTip = '通过这里联系我吧'"
        @mouseenter="socialTip = socialItem.tip"
      />
    </div>
    <div class="child mr-3 hidden font-600 group-hover:block">{{ socialTip }}</div>
  </div>
</template>

<style scoped></style>
