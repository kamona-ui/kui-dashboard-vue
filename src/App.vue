<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('#loading .logo', { y: -50, opacity: 0, duration: 0.5 })
  gsap.to('#loading .left', { rotateY: 45, x: '-130%', duration: 1, delay: 0.6 })
  gsap.to('#loading .right', {
    rotateY: -45,
    x: '130%',
    duration: 1,
    delay: 0.6,
    onComplete: () => {
      document.getElementById('loading')?.remove()
    },
  })
})
</script>
