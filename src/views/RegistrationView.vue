<script setup>
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation.js'
import { authService } from '@/api/authService/index.js'
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleRegisterUser,
} = useMutation({
  mutationFn: (data) => authService.registerUser(data),
  onSuccess: () => {
    router.replace('/map')
  },
})
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
