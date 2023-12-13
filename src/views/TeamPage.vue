<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { fetchTeam, currentTeam } = useAPI()


const route = useRoute()

const team = ref('')
onMounted(async () => {
  await fetchTeam(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
  currentTeam.value = null
})

</script>

<template>
  <main class="min-h-screen bg-gradient-to-b from-blue-700 to-white-300 font-poppins">
    <div v-if="currentTeam" class="flex flex-col items-center justify-center gap-6">
      <img class="p-8 h-64 w-64" :src="currentTeam.image" :alt="currentTeam.name" />
      <h1 class="text-white-800 text-6xl font-bold">
        {{ currentTeam.name }} 
      </h1>
      <h2 class="text-white-800 text-3xl ">
              {{ currentTeam.coach }} 
            </h2>
      <h2 class="text-white-800 text-3xl ">
          {{ currentTeam.mascot }} 
        </h2>
        <h2 class="text-white-800 text-3xl ">
              {{ currentTeam.city }} 
            </h2>
            <h2 class="text-white-800 text-3xl ">
              {{ currentTeam.stadium }} 
            </h2>
            
    </div>
  </main>
</template>