export function formatDateToDayMonth(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0") // jour sur 2 chiffres
  const month = (date.getMonth() + 1).toString().padStart(2, "0") // mois sur 2 chiffres (janvier = 0)
  return `${day}/${month}`
}
