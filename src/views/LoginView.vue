<script setup>
import { useRouter } from 'vue-router'
import { useMutation } from '@/composables/useMutation.js'
import { authService } from '@/api/authService/index.js'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleLoginUser,
} = useMutation({
  mutationFn: (data) => authService.loginUser(data),
  onSuccess: () => {
    router.replace('/map')
  },
})
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
