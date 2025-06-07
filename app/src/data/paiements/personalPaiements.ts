import { findPersonByPseudo, type PaiementData } from "./maisonPaiements"

export const personalPaiements: PaiementData[] = [
  {
    date: new Date(2023, 7, 14),
    paiements: [
      {
        id: "9",
        label: "Snacks",
        coloredLabel: "course",
        people: findPersonByPseudo("Jean"),
        price: 7.5,
        date: new Date(2023, 7, 14),
        participants: [findPersonByPseudo("Jean"), findPersonByPseudo("Paul")],
      },
      {
        id: "10",
        label: "Location vélo",
        coloredLabel: "loisir",
        people: findPersonByPseudo("Paul"),
        price: 15,
        date: new Date(2023, 7, 14),
        participants: [findPersonByPseudo("Paul")],
      },
    ],
  },
]
