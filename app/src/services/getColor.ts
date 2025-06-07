export const getColor = ({
  array,
  bg = 100,
  color = 500,
  hover = 200,
}: {
  array: string[]
  bg?: number
  color?: number
  hover?: number
}) => {
  const colorMap: Record<string, { bg: string; color: string; hover: string }> = array.reduce(
    (acc, arr) => {
      acc[arr] = {
        bg: `bg-${arr}-${bg}`,
        hover: `hover:bg-${arr}-${hover}`,
        color: `text-${arr}-${color}`,
      }
      return acc
    },
    {} as Record<string, { bg: string; color: string; hover: string }>,
  )
  return colorMap
}
