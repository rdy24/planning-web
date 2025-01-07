import { PRIORITY } from '@/lib/utils';

export default function GetPriorityBadge({ priority }) {
    const { URGENT, HIGH, MEDIUM, LOW, UNKNOWN } = PRIORITY;

    let badge, text;

    switch (priority) {
        case URGENT:
            badge = 'bg-red-500 hover:bg-red-700';
            text = URGENT;
            break;
        case HIGH:
            badge = 'bg-yellow-500 hover:bg-yellow-700';
            text = HIGH;
            break;
        case MEDIUM:
            badge = 'bg-blue-500 hover:bg-blue-700';
            text = MEDIUM;
            break;
        case LOW:
            badge = 'bg-green-500 hover:bg-green-700';
            text = LOW;
            break;
        default:
            badge = 'bg-gray-500 hover:bg-gray-700';
            text = UNKNOWN;
            break;
    }

    return <span className={badge}>{text}</span>;
}
