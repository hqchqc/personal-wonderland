<script setup lang="ts">
import MainBottomView from './childComps/MainBottomView.vue'
import MainLeftView from './childComps/MainLeftView.vue'
import MainRightView from './childComps/MainRightView.vue'
</script>

<template>
  <main class="absolute left-0 top-0 h-full w-full text-white">
    <div class="mx-auto my-0 h-screen max-w-6xl w-full px-3">
      <div class="h-full w-full flex flex-row items-center justify-center">
        <MainLeftView />
        <MainRightView />
      </div>

      <MainBottomView />
    </div>
  </main>
</template>
