<script setup lang="ts">
  import PersonalSpace from "@/layouts/Home/PersonalSpace.vue"
  import AllSpaceCard from "@/layouts/Home/AllSpace.vue"
  import AddAction from "@/components/AddAction.vue"
  import { ref, onMounted } from "vue"
  import { fetchAllUser } from "@/services/userService"
  import type { UserType } from "@/schemas/user"

  const users = ref<UserType[]>([])
  const error = ref<string | null>(null)

  const loadUsers = async () => {
    const result = await fetchAllUser()
    if (result === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
      users.value = []
    } else {
      users.value = result
    }
  }

  onMounted(() => {
    loadUsers()
  })
</script>

<template>
  <div>
    <h2>Liste des utilisateurs</h2>
    <p v-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.firstname }} {{ user.lastname }} - {{ user.email }}
      </li>
    </ul>
  </div>
  <div class="mt-5">
    <PersonalSpace />
    <AllSpaceCard />
  </div>
  <AddAction route-name="new_space" />
</template>
