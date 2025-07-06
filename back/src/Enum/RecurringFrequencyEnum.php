<?php

namespace App\Enum;

enum RecurringFrequencyEnum: string
{
    case DAY = 'daily';
    case MONTH = 'monthly';
    case WEEK = 'weekly';
    case YEAR = 'yearly';
}
