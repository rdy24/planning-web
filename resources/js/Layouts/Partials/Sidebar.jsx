import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { PiHouse, PiLockKeyOpen, PiPlus, PiSquare, PiUser } from 'react-icons/pi';

import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function Sidebar({ auth, url }) {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
                        {/* menu */}
                        <li>
                            <Link
                                href={route('dashboard')}
                                className={cn(
                                    url.startsWith('/dashboard')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed tracking-tighter',
                                )}
                            >
                                <PiHouse
                                    className={cn(
                                        url.startsWith('/dashboard') ? 'text-white' : 'text-foreground',
                                        'h-6 w-6 shrink-0',
                                    )}
                                />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={cn(
                                    url.startsWith('/users')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed tracking-tighter',
                                )}
                            >
                                <PiUser
                                    className={cn(
                                        url.startsWith('/users') ? 'text-white' : 'text-foreground',
                                        'h-6 w-6 shrink-0',
                                    )}
                                />
                                People
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className={cn(
                                    url.startsWith('/my-tasks')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed tracking-tighter',
                                )}
                            >
                                <PiSquare
                                    className={cn(
                                        url.startsWith('/my-tasks') ? 'text-white' : 'text-foreground',
                                        'h-6 w-6 shrink-0',
                                    )}
                                />
                                My Tasks
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className={cn(
                                    url.startsWith('/logout')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed tracking-tighter w-full',
                                )}
                            >
                                <PiLockKeyOpen
                                    className={cn(
                                        url.startsWith('/logout') ? 'text-white' : 'text-foreground',
                                        'h-6 w-6 shrink-0',
                                    )}
                                />
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    {/* workspaces */}
                    <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold uppercase leading-relaxed text-foreground">
                            Workspaces
                        </div>

                        <Link>
                            <PiPlus className="h-4 w-4 text-foreground hover:text-red-500" />
                        </Link>
                    </div>
                    <ul role="list" className="-mx-2 mt-2 space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="group flex w-full gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-gray-100"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-foreground bg-white text-[0.625rem] font-medium text-foreground">
                                    B
                                </span>
                                <span className="truncate">Board</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="-mx-6 mt-auto">
                    <Link
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-relaxed tracking-tighter text-foreground hover:bg-gray-100"
                    >
                        <Avatar>
                            <AvatarFallback>X</AvatarFallback>
                        </Avatar>
                        <span className="ml-3">{auth.name}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
