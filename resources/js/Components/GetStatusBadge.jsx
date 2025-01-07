import { STATUS } from '@/lib/utils';

export default function GetStatusBadge({ status }) {
    const { TODO, INPROGRESS, DONE, ONREVIEW, UNKNOWN } = STATUS;

    let badge, text;

    switch (status) {
        case TODO:
            badge = 'bg-red-500 hover:bg-red-700';
            text = TODO;
            break;
        case INPROGRESS:
            badge = 'bg-yellow-500 hover:bg-yellow-700';
            text = INPROGRESS;
            break;
        case DONE:
            badge = 'bg-blue-500 hover:bg-blue-700';
            text = DONE;
            break;
        case ONREVIEW:
            badge = 'bg-green-500 hover:bg-green-700';
            text = ONREVIEW;
            break;
        default:
            badge = 'bg-gray-500 hover:bg-gray-700';
            text = UNKNOWN;
            break;
    }

    return <span className={badge}>{text}</span>;
}
