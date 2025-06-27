export interface ApiError {
  message: string
  status?: number
  code?: string
  details?: any
}
export interface ErrorNotification {
  title: string
  message: string
  type: "error" | "warning"
  duration?: number
}
