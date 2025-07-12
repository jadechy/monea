export default defineNuxtRouteMiddleware(() => {
  const { user } = storeToRefs(useAuthStore());
  if (!user) {
    return navigateTo("/auth/login");
  }
});
