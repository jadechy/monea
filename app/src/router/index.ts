import { createRouter, createWebHistory } from "vue-router"
import ProfilView from "@/views/ProfilView.vue"
import spaceRouter from "./spaceRouter"
import { useAuthStore } from "@/stores/authStore"
import authRouter from "./authRouter"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profil",
      name: "profil",
      component: ProfilView,
      meta: { requiresAuth: true },
    },
    ...authRouter,
    ...spaceRouter,
  ],
})
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login")
  } else {
    next()
  }
})
export default router
