import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SpaceView from "@/views/SpaceView.vue"
import PaiementView from "@/views/PaiementView.vue"
import NewSpaceView from "@/views/NewSpaceView.vue"
import NewPaiementView from "@/views/NewPaiementView.vue"
import ProfilView from "@/views/ProfilView.vue"
import BudgetView from "@/views/BudgetView.vue"
import BudgetCategoryView from "@/views/BudgetCategoryView.vue"

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
      path: "/new-space/:type?",
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
      path: "/space/:space_id/paiement/:id",
      name: "paiement",
      props: true,
      component: PaiementView,
    },
    {
      path: "/space/:space_id/new-paiement",
      name: "new_paiement",
      props: true,
      component: NewPaiementView,
    },
    {
      path: "/space/:space_id/:id/edit",
      name: "edit_paiement",
      props: true,
      component: NewPaiementView,
    },

    {
      path: "/profil",
      name: "profil",
      component: ProfilView,
    },
  ],
})

export default router
