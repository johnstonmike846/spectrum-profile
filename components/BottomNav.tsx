// components/BottomNav.tsx
'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Billing', path: '/billing', icon: '📄' },
    { label: 'Services', path: '/services', icon: '💻' },
    { label: 'Upgrade', path: '/upgrade', icon: '🛒' },
    { label: 'Support', path: '/support', icon: '🛟' },
    { label: 'More', path: '/more', icon: '⋯' },
];

export default function BottomNav() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner flex justify-around py-2 z-50">
            {navItems.map(({ label, path, icon }) => {
                const isActive = pathname.startsWith(path);
                return (
                    <button
                        key={label}
                        onClick={() => router.push(path)}
                        className={`flex flex-col items-center text-xs font-medium ${
                            isActive ? 'text-blue-600' : 'text-gray-500'
                        }`}
                    >
                        <span className="text-lg">{icon}</span>
                        <span>{label}</span>
                    </button>
                );
            })}
        </nav>
    );
}
