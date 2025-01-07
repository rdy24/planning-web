import { cn } from '@/lib/utils';

export default function Widget({ classname, ...props }) {
    const { bgColor, count, icon, title } = props;
    return (
        <div className={cn('rounedd-lg relative overflow-hidden bg-white px-4 pb-6 pt-5 sm:pt-6', classname)}>
            <div>
                <div className={cn('rouned-2xl absolute p-3', bgColor)}>{icon}</div>
                <p className="ml-16 truncate text-sm font-medium text-muted-foreground">{title}</p>
            </div>
            <div className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-foreground">{count}</p>
            </div>
        </div>
    );
}
