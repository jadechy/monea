import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SpaceView from "@/views/SpaceView.vue"
import PaiementView from "@/views/PaiementView.vue"
import NewSpaceView from "@/views/NewSpaceView.vue"
import NewPaiementView from "@/views/NewPaiementView.vue"

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
      path: "/personal-space",
      name: "personal_space",
      props: true,
      component: SpaceView,
    },
    {
      path: "/profil",
      name: "profil",
      component: SpaceView,
    },
    {
      path: "/new-space/:type?",
      name: "new_space",
      component: NewSpaceView,
      props: true,
    },
  ],
})

export default router
