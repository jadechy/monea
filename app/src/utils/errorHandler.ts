import type { ErrorNotification } from "@/types/errors"
import router from "@/router"
import { useErrorHandler } from "@/composables/userErrorHandler"

const { addError } = useErrorHandler()

export const handleApiError = (error: any): void => {
  console.error("Erreur API:", error)

  let notification: ErrorNotification

  if (error.response) {
    const status = error.response.status
    const data = error.response.data

    switch (status) {
      case 400:
        notification = {
          title: "Erreur de validation",
          message: data?.message || "Les données envoyées sont invalides",
          type: "error",
        }
        break
      case 401:
        notification = {
          title: "Non autorisé",
          message: "Vous devez vous connecter pour accéder à cette ressource",
          type: "warning",
        }
        router.push({ name: "login" })
        break
      case 403:
        notification = {
          title: "Accès refusé",
          message: "Vous n'avez pas les permissions nécessaires",
          type: "error",
        }
        break
      case 404:
        notification = {
          title: "Ressource introuvable",
          message: "La ressource demandée n'existe pas",
          type: "error",
        }
        break
      case 422:
        notification = {
          title: "Erreur de validation",
          message: data?.message || "Les données ne sont pas valides",
          type: "error",
        }
        break
      case 429:
        notification = {
          title: "Trop de requêtes",
          message: "Veuillez patienter avant de réessayer",
          type: "warning",
        }
        break
      case 500:
        notification = {
          title: "Erreur serveur",
          message: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.",
          type: "error",
        }
        break
      default:
        notification = {
          title: "Erreur",
          message: data?.message || `Erreur ${status}: ${error.message}`,
          type: "error",
        }
    }
  }
  // Erreurs réseau
  else if (error.request) {
    notification = {
      title: "Erreur de connexion",
      message: "Impossible de contacter le serveur. Vérifiez votre connexion internet.",
      type: "error",
    }
  }
  // Autres erreurs
  else {
    notification = {
      title: "Erreur inattendue",
      message: error.message || "Une erreur inattendue s'est produite",
      type: "error",
    }
  }

  addError(notification)
}
