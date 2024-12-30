<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    },
  },
  type: {
    default: 'button',
    type: String,
  },
})

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})
</script>

<template>
  <button
    class="bg-[#ffa279] rounded-xl py-3 px-10 text-white font-bold -tracking-wider"
    :class="bgStyles"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>
