export default defineNuxtRouteMiddleware(() => {
  console.log("---lala");
  const { user } = storeToRefs(useAuthStore());
  console.log(user);
  if (!user) {
    return navigateTo("/auth/login");
  }
});
