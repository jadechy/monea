import { createRouter, createWebHistory } from "vue-router"
import spaceRouter from "./spaceRouter"
import { useAuthStore } from "@/stores/authStore"
import authRouter from "./authRouter"
import HomeView from "../../../app/pages/index.vue"
import NotFoundView from "../../../app/pages/NotFoundView.vue"
import profilRouter from "./profilRouter"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
    ...profilRouter,
    ...authRouter,
    ...spaceRouter,
  ],
})
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "login" })
  } else if ((to.name === "login" || to.name === "register") && authStore.isAuthenticated) {
    next({ name: "spaces" })
  } else {
    next()
  }
})
export default router
