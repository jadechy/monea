export default defineNuxtRouteMiddleware((to) => {
  if (
    to.path.startsWith("/savings") ||
    to.path.startsWith("/groups") ||
    to.path.startsWith("/user")
  ) {
    setPageLayout("savings");
  }
});
