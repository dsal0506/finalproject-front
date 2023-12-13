<script setup>
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

import useAPI from '@/composables/useAPI'
const { getDepartment } = useAPI()

const selectCard = () => {
  console.log(`${props.team.name} selected`)
}

const props = defineProps({
  team: {
    type: Object,
    required: true,
    default: () => {
      return {
        createdAt: '2022-01-01',
        teamId: '123',
        name: 'John Doe',
        mascot: 'John Doe',
        city: 'John Doe',
        stadium: 'John Doe Stadium',
        image: 'https://www.example.com',
        updatedAt: '2022-01-01',
      }
    },
  },
})


</script>

<template>
  <RouterLink v-if="props.team.teamId" :to="`/api/teams/${props.team.teamId}`">
    <div class="card" @click="selectCard">
      <div class="card-image">
        <img :src="props.team.image" alt="" srcset="" />
      </div>
      <div class="card-details">
        <p class="card-details-name font-poppins">{{ props.team.name }}</p>

      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="postcss">
.card {
  @apply cursor-pointer overflow-hidden rounded-md p-8 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-slate-900;

  &-image {
    img {
      @apply mx-auto rounded-full object-contain;
    }
  }

  &-details {
    @apply flex flex-col gap-2 pt-6 text-center;

    &-name {
      @apply text-4xl text-black;
    }

    &-job {
      @apply -mt-2 text-xs font-bold text-yellow-700;
    }

    &-quote {
      @apply pt-4 text-lg italic text-slate-800;
    }
  }
}</style>