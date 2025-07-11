import type { ApiClient } from "~/plugins/01-api-client";

declare module "#app" {
  interface NuxtApp {
    $api: ApiClient;
  }

  interface ComponentCustomProperties {
    $api: ApiClient;
  }
}
