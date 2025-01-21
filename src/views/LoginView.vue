<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/api/user/index.js'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'

const isLoading = ref(false)
const router = useRouter()

const handleLogin = async (userData) => {
  isLoading.value = true

  try {
    await loginUser(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
</template>
