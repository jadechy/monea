import type { SpaceCardProps } from "@/layouts/Home/SpaceCard.vue"
import { maisonPaiements, type PaiementData } from "./paiements/maisonPaiements"
import { bureauPaiements } from "./paiements/bureauPaiements"
import { cafePaiements } from "./paiements/cafePaiements"
import { biblioPaiements } from "./paiements/biblioPaiements"
import { parcPaiements } from "./paiements/parcPaiements"
import { personalPaiements } from "./paiements/personalPaiements"
type SpaceData = {
  paiements: PaiementData[]
} & SpaceCardProps

export const spacesData: SpaceData[] = [
  {
    id: "1",
    label: "Maison",
    img: "/images/spaces/maison.jpg",
    color: "blue",
    paiements: maisonPaiements,
  },
  {
    id: "2",
    label: "Bureau",
    img: "/images/spaces/bureau.jpg",
    color: "green",
    paiements: bureauPaiements,
  },
  {
    id: "3",
    label: "Café",
    img: "/images/spaces/cafe.jpg",
    color: "pink",
    paiements: cafePaiements,
  },
  {
    id: "4",
    label: "Bibliothèque",
    img: "/images/spaces/bibliotheque.jpg",
    color: "blue",
    paiements: biblioPaiements,
  },
  {
    id: "5",
    label: "Parc",
    img: "/images/spaces/parc.jpg",
    color: "yellow",
    paiements: parcPaiements,
  },
  {
    id: "6",
    label: "Espace personnel",
    img: "/images/spaces/parc.jpg",
    color: "pink",
    paiements: personalPaiements,
  },
]
