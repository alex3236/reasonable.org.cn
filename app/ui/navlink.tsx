'use client';
import clsx from 'clsx';
import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {name: '了解我们', href: '/'},
    {name: '团队成员', href: '/team'},
    {name: '团队项目', href: '/projects'},
    {name: '加入我们', href: '/join'},
];

export default function NavLink() {
    const pathname = usePathname();
    const isProvided = links.find((link) => link.href === pathname);
    return (
        <section className={
            clsx(
                isProvided && 'w-full bg-white z-10' || 'hidden'
            )
        }>
            <div
                className="text-center md:w-1/2 sm:w-3/4 w-11/12 mx-auto relative flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                pathname === link.href && 'bg-white text-black shadow' || 'text-gray-500 hover:bg-white/[0.12] hover:text-black'
                            )}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}