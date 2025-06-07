<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import { categories, type CategoryLabel } from "@/data/categoryLabel"
  import { spacesData } from "@/data/spaces"

  const props = defineProps<{ space_id: string }>()
  const space = spacesData.find((space) => space.id === props.space_id)

  const colorMap: Record<CategoryLabel, string> = {
    abonnement: `bg-yellow-50 hover:bg-yellow-100 text-yellow-800`,
    course: `bg-pink-50 hover:bg-pink-100 text-pink-800`,
    restaurant: ` bg-green-50 hover:bg-green-100 text-green-800`,
    shopping: `bg-blue-50 hover:bg-blue-100 text-blue-800`,
    loisir: `bg-orange-50 hover:bg-orange-100 text-orange-800`,
    default: `bg-gray-50 hover:bg-gray-100 text-gray-800`,
  }
</script>

<template>
  <div class="flex flex-col gap-10">
    <SubHeader
      :label="space?.label ?? 'error'"
      :color="space?.color"
      routeName="space"
      :params="{ id: space?.id ?? 'default' }"
    />

    <section class="flex gap-5">
      <div class="item block lg:flex w-fit lg:w-full rounded-lg">
        <p>Budget restant</p>
        <p><span class="font-bold">300</span> €</p>
      </div>

      <div class="item block lg:flex w-fit lg:w-full rounded-lg">
        <p>Budget initial</p>
        <p><span class="font-bold">300</span> €</p>
      </div>
    </section>
    <BaseSection label="Par catégories">
      <div class="grid gap-6 grid-cols-2 md:grid-cols-3">
        <router-link
          v-for="(category, i) in categories"
          :to="{
            name: 'category_budget_space',
            params: { space_id: space?.id, category_id: category.label },
          }"
          class="flex justify-between rounded-xl px-4 py-4"
          :key="i"
          :class="colorMap[category.label]"
        >
          <p>{{ category.label }}</p>
          <p>30 €</p>
        </router-link>
      </div>
    </BaseSection>
  </div>
</template>
