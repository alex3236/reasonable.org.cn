'use client';
import clsx from 'clsx';
import Link from "next/link";
import {usePathname} from "next/navigation";
import Section from "@/app/ui/container";

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
        <Section className={
            clsx(
                isProvided && 'w-full z-10' || 'hidden'
            )
        }>
            <div
                className="text-center md:w-1/2 sm:w-3/4 w-11/12 mx-auto relative flex space-x-1 rounded-xl bg-primary dark:bg-primary-dark p-1">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                pathname === link.href && 'bg-light dark:bg-midnight text-title dark:text-title-dark shadow' || 'text-content dark:text-content-dark hover:bg-white/[0.12] hover:text-black dark:hover:text-title-dark'
                            )}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </Section>
    )
}