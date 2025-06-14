import type { Color } from "@/layouts/Home/SpaceCard.vue"
import type { ColorType } from "@/types/color"

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
  amount?: number
}
export const categories: Category[] = [
  { label: "course", color: "pink", amount: 100 },
  { label: "restaurant", color: "green", amount: 30 },
  { label: "abonnement", color: "yellow", amount: 60 },
  { label: "shopping", color: "blue", amount: 90 },
  { label: "loisir", color: "orange", amount: 10 },
  { label: "default", color: "gray", amount: 0 },
]

export const categoryLabel: CategoryLabel[] = categories.map((category) => category.label)

export const colors: ColorType[] = ["pink", "green", "yellow", "blue", "orange", "gray", "red"]
