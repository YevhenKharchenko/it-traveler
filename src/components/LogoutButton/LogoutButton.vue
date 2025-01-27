<script setup>
import { useRouter } from 'vue-router'
import { logoutUser } from '@/api/user/index.js'
import { useMutation } from '@/composables/useMutation.js'
import { authService } from '@/api/authService/index.js'
import LogoutIcon from './LogoutIcon.vue'

const router = useRouter()

const { mutation: logout, isLoading } = useMutation({
  mutationFn: () => logoutUser(),
  onSuccess: () => {
    authService.clearToken()
    router.replace('/auth/login')
  },
})
</script>

<template>
  <button @click="logout" class="flex gap-2 items-center px-6 text-black">
    <span v-if="isLoading">Loading...</span>
    <span v-else>Вихід</span>
    <LogoutIcon />
  </button>
</template>
