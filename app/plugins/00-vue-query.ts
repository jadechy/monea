import {
  MutationCache,
  QueryCache,
  QueryClient,
  VueQueryPlugin,
} from "@tanstack/vue-query";
import { defineNuxtPlugin } from "#app";
import { handleApiError } from "~/utils/errorHandler";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error("Erreur query:", error);
      handleApiError(error);
      if (query.state.fetchStatus === "fetching") {
        handleApiError(error);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error("Erreur mutation:", error);
      handleApiError(error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403 ||
          error?.response?.status === 404
        ) {
          return false;
        }
        return failureCount < 3;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000,
    },
    mutations: { retry: false },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueQueryPlugin, { queryClient });
});
