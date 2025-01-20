<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Повне ім’я" v-model="userData.name" />
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput class="mb-4" label="Пароль" type="password" v-model="userData.password" />
    <IButton class="block mt-7 w-full text-center" variant="gradient" type="submit"
      >Створити аккаунт</IButton
    >
  </form>
</template>
