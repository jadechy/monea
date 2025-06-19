// stores/authStore.ts
import { loginAuth } from "@/services/authService"
import type { LoginRequestType } from "@/types/auth"
import { defineStore } from "pinia"
import { ref, computed, readonly } from "vue"

// Types (adaptez selon vos besoins)
export interface UserType {
  id: number
  name: string
  email: string
  avatar?: string
  role?: string
}

export interface AuthResponse {
  token: string
  user: UserType
  refreshToken?: string
}

export const useAuthStore = defineStore("auth", () => {
  // État
  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const user = ref<UserType | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Computed
  const isAuthenticated = computed(() => !!token.value)
  const userInitials = computed(() => {
    if (!user.value) return ""
    return user.value.name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
  })

  // Clés localStorage
  const TOKEN_KEY = "auth_token"
  const REFRESH_TOKEN_KEY = "auth_refresh_token"
  const USER_KEY = "auth_user"

  // Initialisation depuis localStorage
  const initAuth = () => {
    try {
      const savedToken = localStorage.getItem(TOKEN_KEY)
      const savedRefreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
      const savedUser = localStorage.getItem(USER_KEY)
      console.log(savedToken)
      if (savedToken) {
        token.value = savedToken
      }
      if (savedRefreshToken) {
        refreshToken.value = savedRefreshToken
      }
      if (savedUser) {
        user.value = JSON.parse(savedUser)
      }
    } catch (err) {
      console.error("Erreur lors de l'initialisation de l'auth:", err)
      clearAuth()
    }
  }

  // Sauvegarder dans localStorage
  const saveToStorage = () => {
    if (token.value) {
      localStorage.setItem(TOKEN_KEY, token.value)
    }
    if (refreshToken.value) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken.value)
    }
    if (user.value) {
      localStorage.setItem(USER_KEY, JSON.stringify(user.value))
    }
  }

  // Nettoyer localStorage
  const clearStorage = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  // Nettoyer l'état
  const clearAuth = () => {
    token.value = null
    refreshToken.value = null
    user.value = null
    error.value = null
    clearStorage()
  }

  // Connexion
  const login = async ({ username, password }: LoginRequestType) => {
    isLoading.value = true
    error.value = null

    try {
      const res = await loginAuth({
        username: username,
        password: password,
      })

      if (res === null) throw new Error(`Identifiant de connexion incorecte`)

      // Mettre à jour l'état
      token.value = res.token
      // user.value = data.user
      if (res.refreshToken) {
        refreshToken.value = res.refreshToken
      }

      // Sauvegarder
      saveToStorage()

      return { success: true, res: res.token }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur de connexion"
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  // Déconnexion
  const logout = async () => {
    isLoading.value = true

    try {
      // Appel API pour invalider le token côté serveur (optionnel)
      if (token.value) {
        await fetch("/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          },
        })
      }
    } catch (err) {
      console.error("Erreur lors de la déconnexion:", err)
    } finally {
      clearAuth()
      isLoading.value = false
    }
  }

  // Rafraîchir le token
  const refreshAuthToken = async () => {
    if (!refreshToken.value) {
      throw new Error("Pas de refresh token disponible")
    }

    try {
      const response = await fetch("/api/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken.value }),
      })

      if (!response.ok) {
        throw new Error("Impossible de rafraîchir le token")
      }

      const data: AuthResponse = await response.json()

      token.value = data.token
      if (data.refreshToken) {
        refreshToken.value = data.refreshToken
      }
      if (data.user) {
        user.value = data.user
      }

      saveToStorage()
      return data.token
    } catch (err) {
      clearAuth()
      throw err
    }
  }

  // Mettre à jour les informations utilisateur
  const updateUser = (userData: Partial<UserType>) => {
    if (user.value) {
      user.value = { ...user.value, ...userData }
      saveToStorage()
    }
  }

  // Inscription (optionnel)
  const register = async (userData: LoginRequestType & { name: string }) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription")
      }

      const data: AuthResponse = await response.json()

      token.value = data.token
      user.value = data.user
      if (data.refreshToken) {
        refreshToken.value = data.refreshToken
      }

      saveToStorage()

      return { success: true, data }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur d'inscription"
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  return {
    // État (readonly pour éviter les mutations directes)
    token: readonly(token),
    user: readonly(user),
    isLoading: readonly(isLoading),
    error: readonly(error),

    // Computed
    isAuthenticated,
    userInitials,

    // Actions
    initAuth,
    login,
    logout,
    register,
    refreshAuthToken,
    updateUser,

    // Utilitaires
    clearAuth,
  }
})
