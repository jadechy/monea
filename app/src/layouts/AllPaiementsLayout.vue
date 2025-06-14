<script setup lang="ts">
  import AddAction from "@/components/AddAction.vue"
  import type { RouteProps } from "@/components/BackComponent.vue"
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/PaiementCardComponent.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import type { TitleComponentProps } from "@/components/TitleComponent.vue"
  import { spacesData } from "@/data/spaces"
  import router from "@/router"
  import { formatDateToDayMonth } from "@/lib/date"
  import { getSpaceColor } from "@/services/getColor"
  import { Button } from "primevue"

  type Props = {
    space_id: string
    haveCategory?: boolean
    actionButton?: boolean
    subHeader: TitleComponentProps & RouteProps
  }

  const props = defineProps<Props>()
  const space = spacesData.find((space) => space.id === props.space_id)
</script>

<template>
  <SubHeader
    :label="subHeader.label"
    :color="subHeader?.color"
    :routeName="subHeader.routeName"
    :params="subHeader.params"
  />
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-2 sm:flex-row justify-between items-center">
      <RemainingBudget :amount="30" />
      <div v-if="actionButton">
        <Button
          icon="pi pi-eye"
          label="Budget"
          class="mr-2"
          size="small"
          :class="[getSpaceColor({ color: space?.color })]"
          @click="router.push({ name: 'budget_space', params: { space_id: space?.id } })"
        />
        <Button
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          :class="[getSpaceColor({ color: space?.color })]"
          @click="router.push({ name: 'edit_space', params: { id: space?.id } })"
        />
      </div>
    </div>
    <BaseSection
      :label="formatDateToDayMonth(data.date)"
      v-for="(data, index) in space?.paiements"
      :key="index"
    >
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PaiementCardComponent
          v-for="spendCard in data.paiements"
          :key="spendCard.id"
          :id="spendCard.id"
          :price="spendCard.price"
          :label="spendCard.label"
          :people="spendCard.people"
          :categoryLabel="haveCategory ? spendCard.categoryLabel : undefined"
          :space_id="props.space_id"
          :date="spendCard.date"
          :participants="spendCard.participants"
        />
      </div>
    </BaseSection>
  </div>
  <AddAction
    route-name="new_paiement"
    :class="[getSpaceColor({ color: space?.color })]"
    :params="{ space_id: space?.id ?? 'error' }"
  />
</template>
