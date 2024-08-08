<script setup lang="ts">
import GlassCard from '@/components/common/GlassCard/GlassCard.vue'

const linkList = [
  {
    name: '博客',
    link: 'URL_ADDRESS',
    icon: 'i-mdi-blogger'
  },
  {
    name: '网盘',
    link: 'URL_ADDRESS',
    icon: 'i-mdi-apple-icloud'
  },
  {
    name: '音乐',
    link: 'URL_ADDRESS',
    icon: 'i-mdi-music-circle'
  },
  {
    name: '起始页',
    link: 'URL_ADDRESS',
    icon: 'i-mdi-compass'
  },
  {
    name: '网址集',
    link: 'URL_ADDRESS',
    icon: 'i-mdi-library-books'
  },
  {
    name: '今日热榜',
    link: 'URL_ADDRESS',
    icon: 'i-mdi-fire'
  }
]
</script>

<template>
  <div class="w-1/2">
    <div class="h-40 flex">
      <GlassCard type="talk" class="mr-2 flex-1" />
      <GlassCard type="clock" class="ml-2 flex-1" />
    </div>

    <div class="mx-1 mb-4 mt-8 flex items-center">
      <span class="i-mdi-link-variant mr-2 text-xl" />
      <span class="text-[1.15rem]">网站列表</span>
    </div>

    <div class="w-full flex flex-wrap justify-between">
      <GlassCard
        type="list"
        v-for="item in linkList"
        :key="item.name"
        :link-name="item.name"
        :link-icon="item.icon"
      />
    </div>
  </div>
</template>

<style scoped></style>
