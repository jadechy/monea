import type { PaiementData } from "../paiements"
import { findPersonByPseudo } from "./maisonPaiements"
export const cafePaiements: PaiementData[] = [
  {
    date: new Date(2023, 7, 12),
    paiements: [
      {
        id: "5",
        label: "Goûter",
        coloredLabel: "restaurant",
        people: findPersonByPseudo("Paul"),
        price: 9.5,
        date: new Date(2023, 7, 12),
        participants: [findPersonByPseudo("Paul")],
      },
      {
        id: "6",
        label: "Internet",
        coloredLabel: "abonnement",
        people: findPersonByPseudo("Jean"),
        price: 19.99,
        date: new Date(2023, 7, 12),
        participants: [findPersonByPseudo("Jean")],
      },
    ],
  },
]
