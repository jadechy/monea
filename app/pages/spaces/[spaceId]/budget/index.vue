<script setup lang="ts">
import { Button } from "primevue";
import { computed } from "vue";
import ChartLayout from "@/components/Budget/ChartLayout.vue";
import { useQuery } from "@tanstack/vue-query";
import { useGroupsStore } from "@/stores/groupStore";
import { fetchCategoryByGroup } from "@/services/categoryService";
import { useBudget } from "@/composables/useBudget";
import type { GroupType } from "~/types/groupType";

const router = useRouter();
const { space_id } = defineProps<{ space_id: GroupType["id"] }>();
const { remainingBudget } = useBudget(space_id);
const { data: categories } = useQuery({
  queryKey: ["categories-by-group", space_id],
  queryFn: () => fetchCategoryByGroup(space_id),
});
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: space_id }));
</script>

<template>
  <SubHeader
    label="Budget du mois"
    :color="group?.color"
    routeName="space"
    :params="{ id: space_id }"
  />

  <div class="flex flex-col gap-10" v-if="group">
    <section class="flex justify-between">
      <div class="flex gap-5 w-full">
        <RemainingBudget :space_id="group.id" />
        <RemainingBudget
          :space_id="group.id"
          label="Budget initial"
          initialBudget
        />
      </div>

      <Button
        icon="pi pi-eye"
        label="Récap des dépenses"
        size="small"
        :class="[getSpaceColor({ color: group?.color })]"
        @click="
          router.push({
            name: 'forecast_budget_space',
            params: { id: group?.id },
          })
        "
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
          :class="[getSpaceColor({ color: group?.color })]"
          @click="
            router.push({
              name: 'edit_budget_space',
              params: { id: group?.id },
            })
          "
        />
      </template>
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3">
        <router-link
          v-for="(category, i) in categories"
          :to="{
            name: 'category_budget_space',
            params: { space_id: group?.id, category_id: category.id },
          }"
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
      :group_id="space_id"
    />
  </div>
</template>
