import type { SpaceCardProps } from "@/layouts/Home/SpaceCard.vue"
import { bureauPaiements } from "./paiements/bureauPaiements"
import { cafePaiements } from "./paiements/cafePaiements"
import { biblioPaiements } from "./paiements/biblioPaiements"
import { parcPaiements } from "./paiements/parcPaiements"
import { personalPaiements } from "./paiements/personalPaiements"
import type { PaiementData } from "./paiements"
import { maisonPaiements } from "./paiements/maisonPaiements"
import type { CategoryLabel } from "./categoryLabel"
type SpaceData = {
  paiements: PaiementData[]
  overallBudget: number
  budgetByCategory: Record<CategoryLabel, number>
} & SpaceCardProps

export const spacesData: SpaceData[] = [
  {
    id: "1",
    label: "Maison",
    img: "/images/spaces/maison.jpg",
    color: "blue",
    paiements: maisonPaiements,
    overallBudget: 200,
    budgetByCategory: {
      course: 20,
      abonnement: 1,
      restaurant: 30,
      loisir: 40,
      shopping: 23,
      default: 0,
    },
  },
  {
    id: "2",
    label: "Bureau",
    img: "/images/spaces/bureau.jpg",
    color: "green",
    paiements: bureauPaiements,
    overallBudget: 200,
    budgetByCategory: {
      course: 20,
      abonnement: 1,
      restaurant: 30,
      loisir: 40,
      shopping: 23,
      default: 0,
    },
  },
  {
    id: "3",
    label: "Café",
    img: "/images/spaces/cafe.jpg",
    color: "pink",
    paiements: cafePaiements,
    overallBudget: 200,
    budgetByCategory: {
      course: 20,
      abonnement: 1,
      restaurant: 30,
      loisir: 40,
      shopping: 23,
      default: 0,
    },
  },
  {
    id: "4",
    label: "Bibliothèque",
    img: "/images/spaces/bibliotheque.jpg",
    color: "blue",
    paiements: biblioPaiements,
    overallBudget: 200,
    budgetByCategory: {
      course: 20,
      abonnement: 1,
      restaurant: 30,
      loisir: 40,
      shopping: 23,
      default: 0,
    },
  },
  {
    id: "5",
    label: "Parc",
    img: "/images/spaces/parc.jpg",
    color: "yellow",
    paiements: parcPaiements,
    overallBudget: 200,
    budgetByCategory: {
      course: 20,
      abonnement: 1,
      restaurant: 30,
      loisir: 40,
      shopping: 23,
      default: 0,
    },
  },
  {
    id: "6",
    label: "Espace personnel",
    img: "/images/spaces/parc.jpg",
    color: "pink",
    paiements: personalPaiements,
    overallBudget: 200,
    budgetByCategory: {
      course: 20,
      abonnement: 1,
      restaurant: 30,
      loisir: 40,
      shopping: 23,
      default: 0,
    },
  },
]
