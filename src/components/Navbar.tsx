// components/Navbar.js
"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/rienk-boonstra', label: 'Rienk Boonstra' },
    { href: '/backend-development', label: 'Backend Development' },
    { href: '/frontend-development', label: 'Frontend Development' },
    { href: '/opdrachtgevers', label: 'Opdrachtgevers' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const currentPath = usePathname()

    return (
        <nav id="menu-list" className="flex flex-col space-y-4">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                        'px-3 py-2 rounded transition-colors line-height-3',
                        {
                            'bg-black text-yellow-500': currentPath === item.href,
                            'text-white hover:text-yellow-500': currentPath !== item.href,
                        }
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
