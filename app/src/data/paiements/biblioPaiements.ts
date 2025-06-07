import { findPersonByPseudo, type PaiementData } from "./maisonPaiements"

export const biblioPaiements: PaiementData[] = [
  {
    date: new Date(2023, 7, 13),
    paiements: [
      {
        id: "7",
        label: "Abonnement bibliothèque",
        coloredLabel: "abonnement",
        people: findPersonByPseudo("Sophie"),
        price: 10,
        date: new Date(2023, 7, 13),
        participants: [findPersonByPseudo("Sophie")],
      },
      {
        id: "8",
        label: "Don pour un livre",
        coloredLabel: "abonnement",
        people: findPersonByPseudo("Marie"),
        price: 5,
        date: new Date(2023, 7, 13),
        participants: [findPersonByPseudo("Marie")],
      },
    ],
  },
]
