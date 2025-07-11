import { useErrorHandler } from "@/composables/userErrorHandler";
import type { ErrorNotification } from "../types/errors";
import type { Query } from "@tanstack/vue-query";

function isAxiosError(
  error: any
): error is { response: { status: number; data: any } } {
  return error && typeof error === "object" && "response" in error;
}

const { addError } = useErrorHandler();

export const handleApiError = (error: unknown): void => {
  console.error("Erreur API:", error);

  let notification: ErrorNotification;

  if (isAxiosError(error)) {
    const status = error.response.status;
    const data = error.response.data;

    switch (status) {
      case 400:
        notification = {
          title: "Erreur de validation",
          message: data?.message || "Données invalides",
          type: "error",
        };
        break;
      case 401:
        notification = {
          title: "Non autorisé",
          message: "Vous devez vous connecter",
          type: "warning",
        };
        // par exemple ici tu peux faire router.push('login')
        break;
      // autres cas...
      default:
        notification = {
          title: "Erreur",
          message: data?.message || `Erreur ${status}`,
          type: "error",
        };
    }
  } else if (error instanceof Error) {
    notification = {
      title: "Erreur inattendue",
      message: error.message || "Une erreur inattendue s'est produite",
      type: "error",
    };
  } else {
    notification = {
      title: "Erreur inconnue",
      message: "Une erreur inconnue est survenue",
      type: "error",
    };
  }

  addError(notification);
};
