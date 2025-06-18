import BudgetView from "@/views/space/id/budget/BudgetView.vue"
import BudgetCategoryView from "@/views/space/id/budget/BudgetCategoryView.vue"
import BudgetForecastView from "@/views/space/id/budget/BudgetForecastView.vue"
import Index from "@/views/space/id/budget/IndexBudget.vue"

export default [
  {
    path: "budget",
    component: Index,
    props: true,
    children: [
      {
        path: "",
        name: "budget_space",
        component: BudgetView,
      },
      {
        path: "forecast",
        name: "forecast_budget_space",
        component: BudgetForecastView,
        props: true,
      },
      {
        path: ":category_id",
        name: "category_budget_space",
        component: BudgetCategoryView,
        props: true,
      },
    ],
  },
]
