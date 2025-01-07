<?php

namespace App\Enums;

enum CardStatus: string
{
    case TODO = 'To Do';
    case IN_PROGRESS = 'In Progress';
    case DONE = 'Done';
    case ONREVIEW = 'On Review';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
