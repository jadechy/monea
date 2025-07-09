<script setup lang="ts">
  import { Avatar, Card, Rating } from "primevue"
  import { ref } from "vue"

  type Testimonial = {
    name: string
    role: string
    avatar: string
    feedback: string
  }
  const testimonials: Testimonial[] = [
    {
      name: "Alice Martin",
      role: "Étudiante en coloc",
      avatar: "https://i.pravatar.cc/100?img=1",
      feedback:
        "Depuis que j’utilise cette app avec mes colocs, on ne se dispute plus pour les courses. Tout est clair et bien réparti.",
    },
    {
      name: "Youssef Benali",
      role: "Père de famille",
      avatar: "https://i.pravatar.cc/100?img=5",
      feedback:
        "Très pratique pour suivre nos dépenses mensuelles. Même mes enfants peuvent voir ce qu’il reste.",
    },
    {
      name: "Camille Durand",
      role: "Trésorière d’association",
      avatar: "https://i.pravatar.cc/100?img=12",
      feedback:
        "J’adore la simplicité d’utilisation. Gérer les budgets de mon association n’a jamais été aussi rapide.",
    },
  ]
  const value = ref(4)
</script>

<template>
  <div class="grid md:grid-cols-3 gap-6 my-10">
    <Card v-for="(testimonial, index) in testimonials" :key="index">
      <template #title>
        <div class="flex items-center gap-3">
          <Avatar :image="testimonial.avatar" shape="circle" />
          <div>
            <p class="font-semibold">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </template>

      <template #content>
        <Rating v-model="value" :value="5" readonly class="mb-3" />
        <p class="text-gray-700 text-sm">
          {{ testimonial.feedback }}
        </p>
      </template>
    </Card>
  </div>
</template>
