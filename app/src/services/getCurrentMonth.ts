const now = new Date()
const firstDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1))

export const getCurrentMonth = firstDayOfMonth.toISOString()
