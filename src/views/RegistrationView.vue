<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '@/api/user/index.js'
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'

const router = useRouter()
const isLoading = ref(false)

const handleRegisterUser = async (userData) => {
  isLoading.value = true

  try {
    await registerUser(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
</template>
