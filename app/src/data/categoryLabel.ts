import type { Color } from "@/layouts/Home/SpaceCard.vue"

export type CategoryLabel =
  | "course"
  | "restaurant"
  | "abonnement"
  | "shopping"
  | "default"
  | "loisir"

type Category = {
  label: CategoryLabel
  color: Color
}
export const categories: Category[] = [
  { label: "course", color: "pink" },
  { label: "restaurant", color: "green" },
  { label: "abonnement", color: "yellow" },
  { label: "shopping", color: "blue" },
  { label: "loisir", color: "orange" },
  { label: "default", color: "gray" },
]

export const categoryLabel: CategoryLabel[] = categories.map((category) => category.label)
