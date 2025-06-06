import type { PaiementData } from "../paiements"
import { findPersonByPseudo } from "./maisonPaiements"

export const bureauPaiements: PaiementData[] = [
  {
    date: new Date(2023, 7, 11),
    paiements: [
      {
        id: "3",
        label: "Café pour l'équipe",
        coloredLabel: "restaurant",
        people: findPersonByPseudo("Marie"),
        price: 14,
        date: new Date(2023, 7, 11),
        participants: [findPersonByPseudo("Marie"), findPersonByPseudo("Sophie")],
      },
      {
        id: "4",
        label: "Fournitures",
        coloredLabel: "shopping",
        people: findPersonByPseudo("Sophie"),
        price: 60,
        date: new Date(2023, 7, 11),
        participants: [findPersonByPseudo("Sophie")],
      },
    ],
  },
]
