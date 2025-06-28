export const formatDateToDayMonth = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  return `${day}/${month}`
}

export const formatDateForApi = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}
export const getCurrentMonthString = () => {
  const now = new Date()
  const firstDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))

  return firstDayOfMonth.toISOString()
}
export const firstDayOfMonth = (date: Date) => {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1))
}
export const getCurrentMonthDate = () => {
  const now = new Date()
  return firstDayOfMonth(now)
}

const getDaysInterval = (start: Date, end: Date): Date[] => {
  const days = []
  const current = new Date(start)

  while (current <= end) {
    days.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  return days
}
export const getCurrentMonthDays = (): Date[] => {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)

  return getDaysInterval(start, end)
}
export const toLocalDateWithoutTimezoneShift = (date: Date): Date => {
  const correctedTime = date.getTime() - date.getTimezoneOffset() * 60 * 1000
  return new Date(correctedTime)
}
