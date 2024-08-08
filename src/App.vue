<script setup lang="ts">
import { RouterView } from 'vue-router'
import BackgroundCon from './components/content/Background/BackgroundCon.vue'
import { onMounted } from 'vue'
import cursorInit from './utils/cursor'

onMounted(() => {
  cursorInit()
})
</script>

<template>
  <BackgroundCon />
  <RouterView />
</template>
