import { findPersonByPseudo, type PaiementData } from "."

export const bureauPaiements: PaiementData[] = [
  {
    date: new Date(2023, 6, 15),
    paiements: [
      {
        id: "1",
        label: "Pause café équipe",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Jean"),
        price: 12,
        date: new Date(2023, 6, 15),
        participants: [findPersonByPseudo("Jean"), findPersonByPseudo("Marie")],
      },
      {
        id: "2",
        label: "Papeterie",
        categoryLabel: "shopping",
        people: findPersonByPseudo("Marie"),
        price: 35,
        date: new Date(2023, 6, 15),
        participants: [findPersonByPseudo("Marie")],
      },
    ],
  },
  {
    date: new Date(2023, 7, 11),
    paiements: [
      {
        id: "3",
        label: "Café pour l'équipe",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Marie"),
        price: 14,
        date: new Date(2023, 7, 11),
        participants: [findPersonByPseudo("Marie"), findPersonByPseudo("Sophie")],
      },
      {
        id: "4",
        label: "Fournitures",
        categoryLabel: "shopping",
        people: findPersonByPseudo("Sophie"),
        price: 60,
        date: new Date(2023, 7, 11),
        participants: [findPersonByPseudo("Sophie")],
      },
    ],
  },
  {
    date: new Date(2023, 8, 3),
    paiements: [
      {
        id: "5",
        label: "Déjeuner équipe",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Paul"),
        price: 45,
        date: new Date(2023, 8, 3),
        participants: [findPersonByPseudo("Paul"), findPersonByPseudo("Jean")],
      },
      {
        id: "6",
        label: "Matériel informatique",
        categoryLabel: "shopping",
        people: findPersonByPseudo("Sophie"),
        price: 120,
        date: new Date(2023, 8, 3),
        participants: [findPersonByPseudo("Sophie")],
      },
    ],
  },
]
