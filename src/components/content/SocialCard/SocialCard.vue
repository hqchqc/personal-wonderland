<script setup lang="ts">
import { ref } from 'vue'

const socialTip = ref('通过这里联系我吧')
</script>

<template>
  <div
    class="group mt-4 max-w-115 w-full flex items-center justify-between rounded-md py-3 transition duration-300 hover:bg-[#00000040]"
  >
    <div class="flex items-center justify-center">
      <div class="i-mdi-github h-6 w-12 transition-transform duration-200 hover:scale-130" />
      <div
        class="i-tabler-brand-bilibili h-6 w-12 transition-transform duration-200 hover:scale-130"
      />
      <div class="i-tabler-brand-qq h-6 w-12 transition-transform duration-200 hover:scale-130" />
      <div class="i-tabler-mail h-6 w-12 transition-transform duration-200 hover:scale-130" />
      <div
        class="i-tabler-brand-twitter-filled h-6 w-12 transition-transform duration-200 hover:scale-130"
      />
      <div
        class="i-tabler-brand-telegram h-6 w-12 transition-transform duration-200 hover:scale-130"
        @mouseleave="socialTip = '通过这里联系我吧'"
      />
    </div>
    <div class="child mr-3 hidden font-600 group-hover:block">{{ socialTip }}</div>
  </div>
</template>

<style scoped></style>
