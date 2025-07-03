<?php

namespace App\Enum;

enum RecurringFrequencyEnum: string
{
    case DAY = 'day';
    case MONTH = 'month';
    case WEEK = 'week';
    case YEAR = 'year';
}
