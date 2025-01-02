<script setup>
import { ref } from 'vue'
import HomepageView from './views/HomepageView.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <!-- <HomepageView />
  <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <button v-on:click="openModal">Open Modal</button>
  <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" />
</template>
