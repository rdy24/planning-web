import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { PiDatabase } from 'react-icons/pi';

export default function EmptyState({ title, url, className }) {
    return (
        <Link
            href={url}
            className={cn(
                'focus:ring-offfset-2 relative block w-full rounded-lg border-2 border-dashed border-muted-foreground p-12 text-center hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500',
                className,
            )}
        >
            <PiDatabase className="mx-auto h-12 w-12 text-muted-foreground" />
            <span className="mt-2 block text-sm font-medium leading-relaxed tracking-tighter text-muted-foreground">
                Create a new {title}
            </span>
        </Link>
    );
}
