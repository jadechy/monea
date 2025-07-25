import { defineNuxtPlugin } from "#app";
import { useAuthStore } from "~/stores/authStore";
import type { z } from "zod";
import { refreshToken as refreshTokenService } from "~/composables/services/refreshTokenService";

type Method = "GET" | "POST" | "PATCH" | "DELETE" | "UPLOAD";

export interface RequestParams<T extends z.ZodTypeAny> {
  url: string;
  schema: T;
  method: Method;
  body?: unknown;
  options?: RequestInit;
  contentType?: string;
}

export interface ApiClient {
  get: <T extends z.ZodTypeAny>(
    params: Omit<RequestParams<T>, "method">
  ) => Promise<z.infer<T>>;
  post: <T extends z.ZodTypeAny>(
    params: Omit<RequestParams<T>, "method">
  ) => Promise<z.infer<T>>;
  patch: <T extends z.ZodTypeAny>(
    params: Omit<RequestParams<T>, "method">
  ) => Promise<z.infer<T>>;
  delete: <T extends z.ZodTypeAny>(
    params: Omit<RequestParams<T>, "method">
  ) => Promise<z.infer<T> | null>;
  upload: <T extends z.ZodTypeAny>(
    params: Omit<RequestParams<T>, "method">
  ) => Promise<z.infer<T>>;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const API_URL = config.public.apiBase;

  const getAuthStore = () => useAuthStore();

  const requestJson = async <T extends z.ZodTypeAny>({
    url,
    method,
    schema,
    body,
    options = {},
    contentType = "application/json",
  }: RequestParams<T>): Promise<z.infer<T>> => {
    const authStore = getAuthStore();

    const makeRequest = async (token: string | null) => {
      const headers: HeadersInit = {
        "Content-Type": contentType,
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const res = await fetch(`${API_URL}/api/${url}`, {
        method,
        headers,
        ...(body ? { body: JSON.stringify(body) } : {}),
        ...options,
      });

      return res;
    };

    let res = await makeRequest(authStore.token);

    if (res.status === 401) {
      try {
        if (!authStore.refreshToken) {
          authStore.clearAuth();
          throw new Error("Pas de refresh token, déconnexion");
        }
        const newToken = await refreshTokenService(authStore.refreshToken);
        authStore.token = newToken;
        res = await makeRequest(newToken);

        if (res.status === 401) {
          authStore.clearAuth();
          throw new Error("Non autorisé, déconnexion");
        }
      } catch (err) {
        authStore.clearAuth();
        throw err;
      }
    }

    if (res.status === 204) {
      return {} as z.infer<T>;
    }

    if (!res.ok) throw new Error(`Erreur API (${res.status})`);

    const json = await res.json();
    const parsed = schema.safeParse(json);

    if (!parsed.success) {
      console.error("Erreur de validation Zod", parsed.error);
      throw new Error("Réponse invalide");
    }

    return parsed.data;
  };

  const requestJsonNullable = async <T extends z.ZodTypeAny>({
    url,
    method,
    schema,
    body,
    options = {},
    contentType = "application/json",
  }: RequestParams<T>): Promise<z.infer<T> | null> => {
    const authStore = getAuthStore();

    const makeRequest = async (token: string | null) => {
      const headers: HeadersInit = {
        "Content-Type": contentType,
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const res = await fetch(`${API_URL}/api/${url}`, {
        method,
        headers,
        ...(body ? { body: JSON.stringify(body) } : {}),
        ...options,
      });

      return res;
    };

    let res = await makeRequest(authStore.token);

    if (res.status === 401) {
      try {
        if (!authStore.refreshToken) {
          authStore.clearAuth();
          throw new Error("Pas de refresh token, déconnexion");
        }
        const newToken = await refreshTokenService(authStore.refreshToken);
        authStore.token = newToken;
        res = await makeRequest(newToken);

        if (res.status === 401) {
          authStore.clearAuth();
          throw new Error("Non autorisé, déconnexion");
        }
      } catch (err) {
        authStore.clearAuth();
        throw err;
      }
    }

    if (res.status === 204) return null;

    if (!res.ok) throw new Error(`Erreur API (${res.status})`);

    const json = await res.json();
    const parsed = schema.safeParse(json);

    if (!parsed.success) {
      console.error("Erreur de validation Zod", parsed.error);
      throw new Error("Réponse invalide");
    }

    return parsed.data;
  };
  const requestFormData = async <T extends z.ZodTypeAny>({
    url,
    schema,
    body,
    options = {},
  }: RequestParams<T>): Promise<z.infer<T>> => {
    if (!(body instanceof FormData)) {
      throw new Error("Le body doit être un FormData pour UPLOAD.");
    }

    const authStore = getAuthStore();

    const makeRequest = async (token: string | null) => {
      const headers: HeadersInit = {
        ...(options.headers ?? {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      return fetch(`${API_URL}/api/${url}`, {
        method: "POST",
        headers,
        body,
        ...options,
      });
    };

    let res = await makeRequest(authStore.token);
    if (res.status === 401) {
      if (!authStore.refreshToken) throw new Error("Non autorisé");
      const newToken = await refreshTokenService(authStore.refreshToken);
      authStore.token = newToken;
      res = await makeRequest(newToken);
    }

    if (!res.ok) throw new Error(`Erreur API (${res.status})`);

    const json = await res.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) throw new Error("Réponse invalide");

    return parsed.data;
  };

  const api: ApiClient = {
    get: (params) => requestJson({ ...params, method: "GET" }),
    post: (params) =>
      requestJson({
        ...params,
        method: "POST",
        contentType: "application/ld+json",
      }),
    patch: (params) =>
      requestJson({
        ...params,
        method: "PATCH",
        contentType: "application/merge-patch+json",
      }),
    delete: (params) => requestJsonNullable({ ...params, method: "DELETE" }),

    upload: (params) =>
      requestFormData({
        ...params,
        method: "UPLOAD",
      }),
  };

  nuxtApp.provide("api", api);
});
