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
]
