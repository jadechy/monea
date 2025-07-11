import { z } from "zod";

export const postJson = <T extends z.ZodTypeAny>(
  params: Omit<RequestParams<T>, "method" | "contentType">
) => {
  return requestJson({
    ...params,
    method: "POST",
    contentType: "application/ld+json",
  });
};

export const fetchJson = <T extends z.ZodTypeAny>(
  params: Omit<RequestParams<T>, "method">
) => {
  return requestJson({ ...params, method: "GET" });
};

export const patchJson = <T extends z.ZodTypeAny>(
  params: Omit<RequestParams<T>, "method">
) => {
  return requestJson({
    ...params,
    method: "PATCH",
    contentType: "application/merge-patch+json",
  });
};

export const deleteJson = <T extends z.ZodTypeAny>(
  params: Omit<RequestParams<T>, "method">
) => {
  return requestJson({ ...params, method: "DELETE" });
};
