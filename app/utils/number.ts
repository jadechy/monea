export const truncateToTenth = (num: number): number => {
  return Math.trunc(num * 100) / 100
}
