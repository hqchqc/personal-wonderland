<script setup lang="ts">
import GlassCardClockItem from './GlassCardClockItem.vue'
import GlassCardDescItem from './GlassCardDescItem.vue'
import GlassCardListItem from './GlassCardListItem.vue'
import GlassCardTalkItem from './GlassCardTalkItem.vue'

interface Props {
  type: 'desc' | 'clock' | 'talk' | 'list'
  linkName?: string
  linkIcon?: string
}

const { type } = withDefaults(defineProps<Props>(), {
  linkIcon: 'i-mdi-blogger',
  linkName: '博客'
})
</script>

<template>
  <div
    class="max-w-115 rounded-md bg-[#00000040] p-5"
    :class="type === 'desc' ? 'mt-14' : type === 'list' ? 'w-[32%] h-24 mb-5' : ''"
  >
    <div class="h-full flex justify-between">
      <GlassCardDescItem v-if="type === 'desc'" />
      <GlassCardTalkItem v-else-if="type === 'talk'" />
      <GlassCardClockItem v-else-if="type === 'clock'" />
      <GlassCardListItem :link-icon="linkIcon" :link-name="linkName" v-else />
    </div>
  </div>
</template>

<style scoped></style>
