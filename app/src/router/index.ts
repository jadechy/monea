import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ProfilView from "@/views/ProfilView.vue"
import spaceRouter from "./spaceRouter"
import LoginView from "@/views/LoginView.vue"
import { useAuthStore } from "@/stores/authStore"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profil",
      name: "profil",
      component: ProfilView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    ...spaceRouter,
  ],
})
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  console.log(authStore.isAuthenticated)
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login")
  } else {
    next()
  }
})
export default router
