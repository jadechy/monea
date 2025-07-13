import { useErrorHandler } from "@/composables/userErrorHandler";
import type { ErrorNotification } from "../types/errors";

interface ErrorData {
  message?: string;
  errors?: Record<string, string[]>;
  [key: string]: unknown;
}

interface HttpError extends Error {
  response?: {
    status?: number;
    data?: ErrorData;
    _data?: ErrorData;
  };
  status?: number;
  statusCode?: number;
  data?: ErrorData;
}

function isHttpError(error: unknown): error is HttpError {
  if (!error || typeof error !== "object") return false;

  const err = error as Record<string, unknown>;

  return (
    typeof (err.response as Record<string, unknown>)?.status === "number" ||
    typeof err.status === "number" ||
    typeof err.statusCode === "number"
  );
}

// Helper pour extraire le status code
function getStatusCode(error: HttpError): number | null {
  return error.response?.status || error.status || error.statusCode || null;
}

// Helper pour extraire les données d'erreur
function getErrorData(error: HttpError): ErrorData | null {
  return error.response?.data || error.response?._data || error.data || null;
}

const { addError } = useErrorHandler();

export const handleApiError = (error: unknown): void => {
  console.error("Erreur API:", error);

  let notification: ErrorNotification;

  if (isHttpError(error)) {
    const status = getStatusCode(error);
    const data = getErrorData(error);

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
        break;
      case 403:
        notification = {
          title: "Accès refusé",
          message: "Vous n'avez pas les permissions nécessaires",
          type: "error",
        };
        break;
      case 404:
        notification = {
          title: "Ressource introuvable",
          message: "La ressource demandée n'existe pas",
          type: "error",
        };
        break;
      case 422:
        notification = {
          title: "Données invalides",
          message: data?.message || "Erreur de validation",
          type: "error",
        };
        break;
      case 500:
        notification = {
          title: "Erreur serveur",
          message: "Une erreur interne s'est produite",
          type: "error",
        };
        break;
      default:
        notification = {
          title: "Erreur",
          message: data?.message || `Erreur ${status}`,
          type: "error",
        };
    }
  } else if (error instanceof TypeError && error.message.includes("fetch")) {
    notification = {
      title: "Erreur de connexion",
      message: "Impossible de se connecter au serveur",
      type: "error",
    };
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
