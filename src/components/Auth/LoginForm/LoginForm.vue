<script setup>
import { reactive, toRaw, watch } from 'vue'
import IInput from '@/components/IInput/IInput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})

watch(
  userData,
  () => {
    console.log('changed')
  },
  { immediate: true },
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IInput
      class="mb-4"
      v-model="userData.email"
      label="Електронна пошта"
      placeholder="email@gmail.com"
    />
    <IInput type="password" class="mb-4" v-model="userData.password" label="Пароль" />
    <IButton type="submit" class="mt-24 w-full" variant="gradient">Увійти</IButton>
  </FormContainer>
</template>
