export default defineNuxtRouteMiddleware((to) => {
  // Définir le layout selon le chemin
  console.log(to.path);
  if (
    to.path.startsWith("/savings") ||
    to.path.startsWith("/groups") ||
    to.path.startsWith("/user")
  ) {
    setPageLayout("savings");
  }
});
