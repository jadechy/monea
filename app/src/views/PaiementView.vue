<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import { computed } from "vue"
  import { spacesData } from "@/data/spaces"
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { formatDateToDayMonth } from "@/services/date"
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import { Button, Chip } from "primevue"
  import router from "@/router"
  import { getSpaceColor } from "@/services/getColor"
  const props = defineProps<{ id: string; space_id: string }>()

  const space = spacesData.find((space) => space.id === props.space_id)
  const paiement = computed(() => {
    const idNumber = props.id
    if (!space) return null
    for (const dateGroup of space?.paiements) {
      console.log(dateGroup.paiements[0])
      const found = dateGroup.paiements.find((p) => p.id === idNumber)
      if (found) return found
    }
    return null
  })
</script>

<template>
  <SubHeader
    :label="paiement?.label ?? 'error'"
    :color="space?.color"
    routeName="space"
    :params="{ id: space_id }"
  />
  <div v-if="paiement" class="flex flex-col items-center gap-10">
    <div class="w-full">
      <div class="flex justify-between items-center w-full">
        <ColoredLabelComponent v-if="!!paiement.categoryLabel" :label="paiement.categoryLabel" />
        <Button
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          :class="[getSpaceColor({ color: space?.color })]"
          @click="router.push({ name: 'edit_paiement', params: { id: id } })"
        />
      </div>

      <div class="flex items-center gap-6 mt-3">
        <Chip :label="paiement.people.pseudo" :image="paiement.people.avatar" />
        <p><i class="pi pi-calendar mr-1"></i>{{ formatDateToDayMonth(paiement.date) }}</p>
      </div>
    </div>

    <BaseSection label="Participants" class="w-full">
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PeopleComponent
          v-for="participant in paiement.participants"
          :key="participant.id"
          :people="participant"
        >
          <p>{{ paiement.price / paiement.participants.length }} €</p>
        </PeopleComponent>
      </div>
    </BaseSection>
  </div>
</template>

<style></style>
