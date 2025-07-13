export interface ErrorNotification {
  title: string
  message: string
  type: "error" | "warning"
  duration?: number
}
