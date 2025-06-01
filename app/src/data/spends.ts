import type { SpendDateProps } from "@/components/SpendDate.vue"

export const spendsData: SpendDateProps[] = [
  {
    date: "10/08",
    spends: [
      {
        label: "Déjeuner",
        coloredLabel: "course",
        people: "Jean",
        price: 15.5,
      },
      {
        label: "Taxi",
        coloredLabel: "restaurant",
        people: "Marie",
        price: 30,
      },
      {
        label: "Cadeau",
        people: "Paul",
        price: 50,
      },
    ],
  },
  {
    date: "11/08",
    spends: [
      {
        label: "Dîner",
        coloredLabel: "restaurant",
        people: "Sophie",
        price: 25,
      },
      {
        label: "Essence",
        coloredLabel: "abonnement",
        people: "Jean",
        price: 40,
      },
    ],
  },
  {
    date: "12/08",
    spends: [
      {
        label: "Courses hebdo",
        coloredLabel: "course",
        people: "Paul",
        price: 75.8,
      },
      {
        label: "Café",
        coloredLabel: "restaurant",
        people: "Marie",
        price: 5,
      },
    ],
  },
  {
    date: "13/08",
    spends: [
      {
        label: "Vêtements",
        coloredLabel: "shopping",
        people: "Sophie",
        price: 120,
      },
      {
        label: "Abonnement streaming",
        coloredLabel: "abonnement",
        people: "Jean",
        price: 12.99,
      },
    ],
  },
]
