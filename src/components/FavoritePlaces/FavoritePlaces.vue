<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
})
</script>

<template>
  <slot name="label"></slot>
  <slot name="list">
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
    />
  </slot>

  <slot></slot>
  <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
</template>
