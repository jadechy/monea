import { loginAuth, me } from "@/services/authService"
import type { LoginRequestType, LoginResponseType, MeType } from "../../../app/types/authType"
import { defineStore } from "pinia"
import { ref, computed, readonly } from "vue"
import { useGroupsStore } from "./groupStore"
import { useMutation, useQueryClient } from "@tanstack/vue-query"
import router from "@/router"
import type { UserEditType } from "../../../app/types/user"
import { editUser } from "@/services/userService"
import { useRoute } from "vue-router"
const API_URL = import.meta.env.VITE_API_URL

export interface AuthResponse {
  token: string
  user: MeType
  refreshToken?: string
}

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)
  const user = ref<MeType | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const route = useRoute()

  const isAuthenticated = computed(() => !!token.value)
  const userInitials = computed(() => {
    if (!user.value) return ""
    return user.value.name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
  })

  const TOKEN_KEY = "auth_token"
  const REFRESH_TOKEN_KEY = "auth_refresh_token"
  const USER_KEY = "auth_user"

  const initAuth = () => {
    try {
      const savedToken = localStorage.getItem(TOKEN_KEY)
      const savedRefreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
      const savedUser = localStorage.getItem(USER_KEY)
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

  const clearStorage = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  const clearAuth = () => {
    token.value = null
    refreshToken.value = null
    user.value = null
    error.value = null
    clearStorage()
  }
  const authSuccess = async (res: LoginResponseType) => {
    token.value = res.token
    if (res.refresh_token) {
      refreshToken.value = res.refresh_token
    }

    const resMe = await me()
    if (resMe) {
      user.value = resMe
    }
    saveToStorage()

    router.push({ name: "spaces" })
    const groupStore = useGroupsStore()
    await groupStore.refetch()
  }

  const queryClient = useQueryClient()

  const loginMutation = useMutation({
    mutationFn: (params: LoginRequestType) => loginAuth(params),
    onMutate: () => {
      isLoading.value = true
      error.value = null
    },
    onSuccess: async (res) => {
      if (!res) throw new Error("Identifiants incorrects")
      queryClient.invalidateQueries({ queryKey: ["profil"] })
      await authSuccess(res)
    },
    onSettled: () => {
      isLoading.value = false
    },
  })

  const loginGoogle = async () => {
    const res: LoginResponseType = route.query as LoginResponseType
    if (res.token) {
      await authSuccess(res)
    } else {
      router.push({ name: "login" })
    }
  }

  const refreshAuthToken = async () => {
    if (!refreshToken.value) {
      throw new Error("Pas de refresh token disponible")
    }

    try {
      const response = await fetch(`${API_URL}/api/token/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken.value }),
      })

      if (!response.ok) {
        throw new Error("Impossible de rafraîchir le token")
      }

      const data: AuthResponse = await response.json()

      token.value = data.token
      if (data.refreshToken) {
        refreshToken.value = data.refreshToken
      }
      saveToStorage()
      return data.token
    } catch (err) {
      clearAuth()
      throw err
    }
  }
  const updateUser = useMutation({
    mutationFn: (data: FormData) => editUser(data),
    onMutate: () => {
      isLoading.value = true
      error.value = null
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["profil", "me"] })

      const resMe = await me()
      if (resMe) {
        user.value = resMe
      }

      saveToStorage()
      router.push({ name: "profil" })
    },
    onSettled: () => {
      isLoading.value = false
    },
  })

  return {
    token: readonly(token),
    user: readonly(user),
    isLoading: readonly(isLoading),
    error: readonly(error),

    isAuthenticated,
    userInitials,

    initAuth,
    loginMutation,
    loginGoogle,
    refreshAuthToken,
    updateUser,

    clearAuth,
  }
})
