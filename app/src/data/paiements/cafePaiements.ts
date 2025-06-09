import { findPersonByPseudo, type PaiementData } from "."

export const cafePaiements: PaiementData[] = [
  {
    date: new Date(2023, 6, 10),
    paiements: [
      {
        id: "1",
        label: "Petit déjeuner",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Jean"),
        price: 7.2,
        date: new Date(2025, 6, 10),
        participants: [findPersonByPseudo("Jean")],
      },
      {
        id: "2",
        label: "Abonnement Wifi",
        categoryLabel: "abonnement",
        people: findPersonByPseudo("Marie"),
        price: 15,
        date: new Date(2025, 7, 10),
        participants: [findPersonByPseudo("Marie"), findPersonByPseudo("Jean")],
      },
    ],
  },
  {
    date: new Date(2023, 7, 12),
    paiements: [
      {
        id: "5",
        label: "Goûter",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Paul"),
        price: 9.5,
        date: new Date(2025, 5, 12),
        participants: [findPersonByPseudo("Paul")],
      },
      {
        id: "6",
        label: "Internet",
        categoryLabel: "abonnement",
        people: findPersonByPseudo("Jean"),
        price: 19.99,
        date: new Date(2025, 5, 1),
        participants: [findPersonByPseudo("Jean")],
      },
    ],
  },
  {
    date: new Date(2023, 8, 22),
    paiements: [
      {
        id: "7",
        label: "Déjeuner affaire",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Marie"),
        price: 25,
        date: new Date(2025, 6, 1),
        participants: [findPersonByPseudo("Marie"), findPersonByPseudo("Jean")],
      },
      {
        id: "8",
        label: "Carte cadeau café",
        categoryLabel: "shopping",
        people: findPersonByPseudo("Paul"),
        price: 30,
        date: new Date(2023, 8, 22),
        participants: [findPersonByPseudo("Paul")],
      },
    ],
  },
  {
    date: new Date(2023, 9, 5),
    paiements: [
      {
        id: "9",
        label: "Pause café",
        categoryLabel: "restaurant",
        people: findPersonByPseudo("Jean"),
        price: 4.8,
        date: new Date(2023, 9, 5),
        participants: [findPersonByPseudo("Jean")],
      },
      {
        id: "10",
        label: "Abonnement magazine café",
        categoryLabel: "abonnement",
        people: findPersonByPseudo("Marie"),
        price: 8,
        date: new Date(2023, 9, 5),
        participants: [findPersonByPseudo("Marie")],
      },
    ],
  },
]
