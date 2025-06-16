import type { CategoryLabel } from "./categoryLabel"
import type { ColorType } from "@/types/color"
type SpaceCardProps = {
  id: string
  label: string
  img: string
  color: ColorType
}

// type SpaceData = {
//   expenses: Expens[]
//   overallBudget: number
//   budgetByCategory: Record<CategoryLabel, number>
// } & SpaceCardProps

// export const spacesData: SpaceData[] = [
//   {
//     id: "1",
//     label: "Maison",
//     img: "/images/spaces/maison.jpg",
//     color: "blue",
//     expenses: maisonPaiements,
//     overallBudget: 200,
//     budgetByCategory: {
//       course: 20,
//       abonnement: 1,
//       restaurant: 30,
//       loisir: 40,
//       shopping: 23,
//       default: 0,
//     },
//   },
//   {
//     id: "2",
//     label: "Bureau",
//     img: "/images/spaces/bureau.jpg",
//     color: "green",
//     expenses: bureauPaiements,
//     overallBudget: 200,
//     budgetByCategory: {
//       course: 20,
//       abonnement: 1,
//       restaurant: 30,
//       loisir: 40,
//       shopping: 23,
//       default: 0,
//     },
//   },
//   {
//     id: "3",
//     label: "Café",
//     img: "/images/spaces/cafe.jpg",
//     color: "pink",
//     expenses: cafePaiements,
//     overallBudget: 200,
//     budgetByCategory: {
//       course: 20,
//       abonnement: 1,
//       restaurant: 30,
//       loisir: 40,
//       shopping: 23,
//       default: 0,
//     },
//   },
//   {
//     id: "4",
//     label: "Bibliothèque",
//     img: "/images/spaces/bibliotheque.jpg",
//     color: "blue",
//     expenses: biblioPaiements,
//     overallBudget: 200,
//     budgetByCategory: {
//       course: 20,
//       abonnement: 1,
//       restaurant: 30,
//       loisir: 40,
//       shopping: 23,
//       default: 0,
//     },
//   },
//   {
//     id: "5",
//     label: "Parc",
//     img: "/images/spaces/parc.jpg",
//     color: "yellow",
//     expenses: parcPaiements,
//     overallBudget: 200,
//     budgetByCategory: {
//       course: 20,
//       abonnement: 1,
//       restaurant: 30,
//       loisir: 40,
//       shopping: 23,
//       default: 0,
//     },
//   },
//   {
//     id: "6",
//     label: "Espace personnel",
//     img: "/images/spaces/parc.jpg",
//     color: "pink",
//     expenses: personalPaiements,
//     overallBudget: 200,
//     budgetByCategory: {
//       course: 20,
//       abonnement: 1,
//       restaurant: 30,
//       loisir: 40,
//       shopping: 23,
//       default: 0,
//     },
//   },
// ]
