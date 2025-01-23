<script setup>
import { computed, reactive } from 'vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'submit'])
const formData = reactive({
  title: '',
  description: '',
  img: '',
})

const handleUpload = (url) => {
  formData.img = url
}

const resetForm = () => {
  formData.title = ''
  formData.description = ''
  formData.img = ''
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData, resetForm)" class="min-w-[420px]">
      <div class="flex justify-center items-center gap-1 font-bold mb-10">
        <MarkerIcon /> Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput
        type="textarea"
        label="Опис"
        placeholder="Введіть текст"
        v-model="formData.description"
      />
      <div class="flex gap-2 items-center mt-2">
        <img
          v-if="formData.img"
          :src="formData.img"
          alt="Picture of location"
          class="w-8 h-8 object-cover"
        />
        <InputImage @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>
      <IButton class="w-full mt-10" variant="gradient" type="submit" :is-loading="props.isLoading"
        >Додати</IButton
      >
      <div v-if="hasError" class="text-red-500">Щось пішло не так</div>
    </form>
  </IModal>
</template>
