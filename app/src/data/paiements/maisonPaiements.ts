import type { PaiementCardComponentProps } from "@/components/PaiementCardComponent.vue"
import { peopleData, type People } from "../people"

export function findPersonByPseudo(pseudo: string): People {
  const person = peopleData.find((p) => p.firstname === pseudo)
  if (!person) throw new Error(`Personne non trouvée pour le pseudo "${pseudo}"`)
  return person
}
export type PaiementData = {
  paiements: PaiementCardComponentProps[]
  date: Date
}
export const maisonPaiements: PaiementData[] = [
  {
    date: new Date(2023, 7, 10),
    paiements: [
      {
        id: "1",
        label: "Courses",
        coloredLabel: "course",
        people: findPersonByPseudo("Jean"),
        price: 42.5,
        date: new Date(2023, 7, 10),
        participants: [findPersonByPseudo("Jean"), findPersonByPseudo("Marie")],
      },
      {
        id: "2",
        label: "Nettoyage",
        coloredLabel: "course",
        people: findPersonByPseudo("Paul"),
        price: 25,
        date: new Date(2023, 7, 10),
        participants: [findPersonByPseudo("Paul")],
      },
    ],
  },
]
