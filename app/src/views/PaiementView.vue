<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import { computed } from "vue"
  import { spacesData } from "@/data/spaces"
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { formatDateToDayMonth } from "@/services/date"
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import { Button } from "primevue"
  const props = defineProps<{ id: string; space_id: string }>()

  const space = spacesData.find((space) => space.id === props.space_id)
  const paiement = computed(() => {
    const idNumber = props.id
    if (!space) return null
    for (const dateGroup of space?.paiements) {
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
    <div class="flex justify-between items-center w-full">
      <ColoredLabelComponent :label="paiement.coloredLabel" />
      <p>{{ formatDateToDayMonth(paiement.date) }} <i class="pi pi-calendar"></i></p>
    </div>
    <BaseSection label="Payé par" class="w-full">
      <PeopleComponent :people="paiement.people">
        <p>{{ paiement.price }} €</p>
      </PeopleComponent>
    </BaseSection>
    <BaseSection label="Participants" class="w-full">
      <PeopleComponent
        v-for="participant in paiement.participants"
        :key="participant.id"
        :people="participant"
      >
        <p>{{ paiement.price / paiement.participants.length }} €</p>
      </PeopleComponent>
    </BaseSection>
    <Button class="w-64">Modifier</Button>
  </div>
</template>

<style></style>
