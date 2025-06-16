<script setup lang="ts">
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { fetchGroup } from "@/services/groupService"
  import type { ErrorType } from "@/types/error"
  import type { GroupType } from "@/types/group"
  import { onMounted, ref } from "vue"
  const props = defineProps<{ id: string }>()
  const group = ref<GroupType>()
  const error = ref<ErrorType>(null)
  onMounted(async () => {
    const resultGroup = await fetchGroup(props.id)
    if (resultGroup === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      group.value = resultGroup
    }
  })
</script>

<template>
  <AllPaiementsLayout
    v-if="group"
    :group="group"
    :subHeader="{
      label: group?.name ?? 'error',
      routeName: 'home',
      color: group?.color,
    }"
    action-button
    have-category
  />
</template>
