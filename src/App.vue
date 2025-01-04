<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './map/settings'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import MarkerIcon from './components/icons/MarkerIcon.vue'

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'SUper description 1',
    img: '',
    lngLat: [30.523333, 50.490001],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'SUper description 2',
    img: '',
    lngLat: [30.523333, 50.450001],
  },
]
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap class="w-full h-full"></MapboxMap>
    </div>
    <div>
      <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
        <MarkerIcon class="h-8 w-8" />
      </MapboxMarker>
    </div>
  </main>
</template>
