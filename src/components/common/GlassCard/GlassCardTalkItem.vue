<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
const talkInfo = reactive({
  talk: '',
  from_who: ''
})
const showMusicPlayer = ref(false)
const showDefaultTalk = ref(true)

const fetchTalk = async () => {
  const response = await fetch('https://v1.hitokoto.cn')
  const { hitokoto, from_who } = await response.json()
  talkInfo.talk = hitokoto
  talkInfo.from_who = from_who || '佚名'
}

const handleMusicPlayer = () => {
  showDefaultTalk.value = false
}

onMounted(() => {
  fetchTalk()
})
</script>

<template>
  <div
    class="h-full w-full"
    @mouseenter="showMusicPlayer = true"
    @mouseleave="showMusicPlayer = false"
    v-if="showDefaultTalk"
  >
    <div
      class="absolute left-0 top-0 w-full flex animate-fade-in animate-duration-200 items-center justify-center rounded-tl-md rounded-tr-md bg-[#00000040] bg-opacity-15 py-1"
      v-show="showMusicPlayer"
      @click="handleMusicPlayer()"
    >
      <span class="i-solar-music-notes-broken text-white"></span>
      <span class="ml-2 text-sm">打开音乐播放器</span>
    </div>

    <div class="h-full flex flex-col justify-evenly">
      <span class="text-[1.1rem] font-500">{{ talkInfo.talk }}</span>
      <span class="mt-2 self-end font-bold">-「 {{ talkInfo.from_who }} 」</span>
    </div>
  </div>

  <div v-else class="w-full flex flex-col items-center justify-around">
    <div class="w-full flex items-center justify-center text-[15px] font-medium">
      <div class="mx-2 rounded-md bg-white bg-opacity-20 px-2 py-0.5 hover:bg-opacity-40">
        音乐列表
      </div>
      <div
        class="mx-2 rounded-md bg-white bg-opacity-20 px-2 py-0.5 hover:bg-opacity-40"
        @click="showDefaultTalk = true"
      >
        回到一言
      </div>
    </div>

    <div class="w-full flex items-center justify-evenly">
      <div
        class="flex items-center items-center justify-center rounded-md hover:bg-white hover:bg-opacity-20"
      >
        <span class="i-material-symbols-skip-previous-outline h-9 w-9 text-white"></span>
      </div>
      <div
        class="flex items-center items-center justify-center rounded-md hover:bg-white hover:bg-opacity-20"
      >
        <span class="i-material-symbols-play-arrow h-12 w-12"></span>
        <span class="i-material-symbols-pause" v-show="false"></span>
      </div>
      <div
        class="flex items-center items-center justify-center rounded-md hover:bg-white hover:bg-opacity-20"
      >
        <span class="i-material-symbols-skip-next-outline h-9 w-9"></span>
      </div>
    </div>
    <div>未播放音乐</div>
  </div>
</template>

<style scoped></style>
