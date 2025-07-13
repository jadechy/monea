<script setup lang="ts">
import { Button } from "primevue";
import { useGroupsStore } from "@/stores/groupStore";
import { useBudget } from "~/composables/useBudgetMutation";
import { useSeo } from "~/composables/useSeo";

const router = useRouter();
const route = useRoute();
const { group_id } = route.params as {
  group_id: string;
};
const { remainingBudget } = useBudget();

const { group } = storeToRefs(useGroupsStore());
useSeo({
  title: `Suivi du budget du groupe ${group.value?.name}`,
  description: `Visualisez, gérez et optimisez le budget mensuel et les dépenses par catégorie du groupe ${group.value?.name}. Gardez le contrôle sur vos finances partagées.`,
  ogTitle: `Budget du groupe ${group.value?.name}`,
  ogDescription: `Suivi complet du budget du groupe ${group.value?.name} : répartition par catégorie, dépenses mensuelles et gestion partagée des finances.`,
  image: group.value?.picture ?? undefined,
});
const { categories } = useCategoryMutation();
</script>

<template>
  <SubHeader
    label="Budget du mois"
    :color="group?.color"
    :to="`/groups/${group?.id}`"
  />

  <div class="flex flex-col gap-10" v-if="group">
    <section class="flex justify-between">
      <div class="flex gap-5 w-full">
        <RemainingBudget />
        <RemainingBudget label="Budget initial" initialBudget />
      </div>

      <Button
        icon="pi pi-eye"
        label="Récap des dépenses"
        size="small"
        :class="[getGroupColor({ color: group?.color })]"
        @click="router.push(`/groups/${group_id}/budget/forecast`)"
      />
    </section>
    <BaseSection
      label="Budget du mois par catégories"
      v-if="categories && categories.length > 0"
    >
      <template #header>
        <Button
          v-if="hasEditPermission(group)"
          icon="pi pi-pencil"
          label="Modifier les budgets"
          size="small"
          :class="[getGroupColor({ color: group?.color })]"
          @click="router.push(`/groups/${group_id}/budget/edit`)"
        />
      </template>
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3">
        <router-link
          v-for="(category, i) in categories"
          :to="`/groups/${group_id}/category/${category.id}`"
          class="flex justify-between rounded-full px-4 py-3"
          :key="i"
          :class="`bg-${category.color}-50 hover:bg-${category.color}-100 text-${category.color}-800`"
        >
          <p>{{ category.label !== "default" ? category.label : "Autres" }}</p>
          <p v-if="remainingBudget">
            {{
              truncateToTenth(
                remainingBudget.find(
                  (budget) =>
                    budget.category.id === category.id &&
                    budget.monthStart ===
                      formatDateISO(getCurrentMonthStartDate())
                )?.amount ?? 0
              )
            }}
            €
          </p>
        </router-link>
      </div>
    </BaseSection>
    <Button v-else size="small">Créer vos budgets</Button>
    <ChartLayout
      v-if="remainingBudget && remainingBudget.length > 0"
      :budgets="remainingBudget"
      :group_id="group_id"
    />
  </div>
</template>
