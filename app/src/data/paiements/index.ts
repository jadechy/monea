import type { PaiementCardComponentProps } from "@/components/PaiementCardComponent.vue"
import { peoplesData, type People } from "../people"

export function findPersonByPseudo(pseudo: string): People {
  const person = peoplesData.find((p) => p.firstname === pseudo)
  if (!person) throw new Error(`Personne non trouvée pour le pseudo "${pseudo}"`)
  return person
}
export type PaiementData = {
  paiements: PaiementCardComponentProps[]
  date: Date
}
