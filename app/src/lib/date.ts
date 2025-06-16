export const formatDateToDayMonth = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  return `${day}/${month}`
}

export const formatDateForApi = (date: Date): string => {
  return date.toISOString().split("T")[0]
}

export const getCurrentMonth = () => {
  const now = new Date()
  const firstDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))

  return firstDayOfMonth.toISOString()
}
