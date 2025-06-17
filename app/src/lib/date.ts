export const formatDateToDayMonth = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  return `${day}/${month}`
}

export const formatDateForApi = (date: Date): string => {
  return date.toISOString().split("T")[0]
}

export const getCurrentMonthString = () => {
  const now = new Date()
  const firstDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))

  return firstDayOfMonth.toISOString()
}
export const getCurrentMonthDate = () => {
  const now = new Date()
  const firstDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))

  return firstDayOfMonth
}

const getDaysInterval = (start: Date, end: Date): Date[] => {
  const days = []
  const current = new Date(start)

  while (current <= end) {
    days.push(new Date(current)) // on ajoute une copie de la date
    current.setDate(current.getDate() + 1) // on passe au jour suivant
  }

  return days
}
export const getCurrentMonthDays = (): Date[] => {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)

  return getDaysInterval(start, end)
}
