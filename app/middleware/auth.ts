export default defineNuxtRouteMiddleware(() => {
  const { user } = storeToRefs(useAuthStore());
  const { trackMatomoEvent } = useMatomoTracker();
  if (!user || !user.value) {
    trackMatomoEvent("Security", "AccessDenied", "access_denied");

    return navigateTo("/auth/login");
  }
});
