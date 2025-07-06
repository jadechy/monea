<?php

namespace App\Service;

use App\Enum\RecurringFrequencyEnum;
use DateInterval;
use DateTimeImmutable;

class RecurrenceDateGenerator
{
    public function generate(
        DateTimeImmutable $startDate,
        RecurringFrequencyEnum $frequency,
        int $repetitionCount,
        ?DateTimeImmutable $endDate = null
    ): array {
        $dates = [];

        // Durée totale de l'intervalle en secondes
        // Pour daily = 1 jour, weekly = 7 jours, monthly ~ 30 jours, yearly ~ 365 jours
        $intervalSeconds = match ($frequency->value) {
            'daily' => 24 * 3600,
            'weekly' => 7 * 24 * 3600,
            'monthly' => 30 * 24 * 3600,  // approximation
            'yearly' => 365 * 24 * 3600,  // approximation
            default => throw new \InvalidArgumentException("Invalid frequency: $frequency"),
        };

        // On fixe la date actuelle à la date de départ
        $currentIntervalStart = $startDate;

        // Générer les intervalles jusqu'à dépassement de endDate (ou max répétitions raisonnable)
        // Pour éviter boucle infinie si pas d'endDate, on limite par exemple à 100 occurrences max
        $maxOccurrences = 100;
        $totalOccurrences = 0;

        while (true) {
            // Pour chaque intervalle, on génère repetitionCount dates espacées dans l'intervalle
            for ($i = 0; $i < $repetitionCount; $i++) {
                $secondsOffset = intval($i * ($intervalSeconds / $repetitionCount));
                $newTimestamp = $currentIntervalStart->getTimestamp() + $secondsOffset;

                $newDate = (new DateTimeImmutable())->setTimestamp($newTimestamp);

                // Ne pas ajouter si date avant startDate (rare mais safe)
                if ($newDate < $startDate) {
                    continue;
                }

                // Arrêter si on dépasse endDate
                if ($endDate !== null && $newDate > $endDate) {
                    return $dates;
                }

                $dates[] = $newDate;
                $totalOccurrences++;

                if ($totalOccurrences >= $maxOccurrences) {
                    return $dates;
                }
            }

            // Avancer au début du prochain intervalle
            $currentIntervalStart = match ($frequency->value) {
                'daily' => $currentIntervalStart->add(new DateInterval('P1D')),
                'weekly' => $currentIntervalStart->add(new DateInterval('P1W')),
                'monthly' => $currentIntervalStart->add(new DateInterval('P1M')),
                'yearly' => $currentIntervalStart->add(new DateInterval('P1Y')),
            };

            // Si on dépasse l'endDate avec le début du prochain intervalle, on s'arrête
            if ($endDate !== null && $currentIntervalStart > $endDate) {
                break;
            }
        }

        return $dates;
    }
}
