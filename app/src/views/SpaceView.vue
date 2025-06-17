<script setup lang="ts">
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { useGroupStore } from "@/stores/groupStore"
  import type { GroupType } from "@/types/group"
  import { onMounted, ref } from "vue"
  const props = defineProps<{ id: string }>()
  const groupStore = useGroupStore()
  const group = ref<GroupType>()

  onMounted(async () => {
    const groupResult = await groupStore.getGroupById(Number(props.id))
    group.value = groupResult
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
