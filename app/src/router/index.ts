import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SpaceView from "@/views/SpaceView.vue"
import NewSpaceView from "@/views/NewSpaceView.vue"
import ProfilView from "@/views/ProfilView.vue"
import BudgetView from "@/views/BudgetView.vue"
import BudgetCategoryView from "@/views/BudgetCategoryView.vue"
import BudgetForecastView from "@/views/BudgetForecastView.vue"
import ExpenseView from "@/views/ExpenseView.vue"
import NewExpenseView from "@/views/NewExpenseView.vue"
import LoginView from "@/views/LoginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/space/:id",
      name: "space",
      props: true,
      component: SpaceView,
    },
    {
      path: "/space/:id/edit",
      name: "edit_space",
      props: true,
      component: NewSpaceView,
    },
    {
      path: "/new-space",
      name: "new_space",
      component: NewSpaceView,
      props: true,
    },
    {
      path: "/space/:space_id/budget",
      name: "budget_space",
      component: BudgetView,
      props: true,
    },
    {
      path: "/space/:space_id/budget/:category_id",
      name: "category_budget_space",
      component: BudgetCategoryView,
      props: true,
    },
    {
      path: "/space/:space_id/budget/forecast",
      name: "forecast_budget_space",
      component: BudgetForecastView,
      props: true,
    },
    {
      path: "/space/:space_id/expense/:id",
      name: "expense",
      props: true,
      component: ExpenseView,
    },
    {
      path: "/space/:space_id/new-expense",
      name: "new_expense",
      props: true,
      component: NewExpenseView,
    },
    {
      path: "/space/:space_id/:id/edit",
      name: "edit_paiement",
      props: true,
      component: NewExpenseView,
    },

    {
      path: "/profil",
      name: "profil",
      component: ProfilView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
})

export default router
