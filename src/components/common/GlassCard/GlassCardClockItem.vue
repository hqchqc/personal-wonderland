<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const date = new Date()
const nowTime = ref('')
let timer = 0

const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
const nowWeek = weeks[new Date().getDay()]

function getTime() {
  const newDate = new Date()
  const hour = newDate.getHours()
  const minute = newDate.getMinutes()
  const second = newDate.getSeconds()
  nowTime.value = ` ${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`
}

onMounted(() => {
  timer = setInterval(() => getTime(), 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  timer = 0
})
</script>

<template>
  <div class="h-full w-full">
    <div class="h-full flex flex-col items-center justify-evenly">
      <span class="text-[1.1rem] font-500">
        {{ year }} 年 {{ month }} 月 {{ day }} 日 {{ nowWeek }}
      </span>
      <span class="text-3xl font-bold font-clock"> {{ nowTime }} </span>
      <span class="font-550"> 台州 晴 31℃ 东风 5 级 </span>
    </div>
  </div>
</template>

<style scoped></style>
