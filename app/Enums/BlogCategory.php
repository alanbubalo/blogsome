<?php

namespace App\Enums;

enum BlogCategory: string
{
    case TECHNOLOGY = 'technology';
    case HEALTH = 'health';
    case LIFESTYLE = 'lifestyle';
    case TRAVEL = 'travel';
    case EDUCATION = 'education';
    case FOOD = 'food';
    case FINANCE = 'finance';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
