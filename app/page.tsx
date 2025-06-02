'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
    Bell,
    Search,
    MessageCircle,
    Smartphone,
    Wifi,
    Star,
    Plus,
    CreditCard,
    FileText,
} from 'lucide-react';

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 pb-24">
            {/* Top Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-4 py-6 flex justify-between items-center">
                <h1 className="text-xl font-bold">Spectrum</h1>
                <div className="flex space-x-4">
                    <Search className="w-5 h-5" />
                    <MessageCircle className="w-5 h-5" />
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow p-4 mx-4 mt-4">
                <div className="flex items-center text-sm font-semibold mb-1">
                    <Bell className="w-4 h-4 mr-2" />
                    NOTIFICATIONS (1)
                </div>
                <div className="text-sm font-semibold mt-2">Stream with Xumo</div>
                <p className="text-sm text-gray-600">
                    Add a Xumo stream box to your account to watch all of your favorite streaming apps.{' '}
                    <a href="#" className="text-blue-600 font-medium">
                        Learn More
                    </a>
                </p>
            </div>

            {/* Action Grid */}
            <div className="grid grid-cols-3 gap-4 mx-4 mt-6">
                <ActionCard icon={<FileText />} label="View My Spectrum Plan" />
                <ActionCard icon={<Star />} label="Upgrade My Spectrum Plan" />
                <ActionCard
                    icon={<Wifi />}
                    label="Manage Internet/WiFi"
                    onClick={() => router.push('/diagnostic')}
                />
                <ActionCard icon={<Smartphone />} label="Manage Mobile" />
                <ActionCard
                    icon={<Plus />}
                    label="Add TV/Streaming"
                    onClick={() => router.push('/load')}
                />
                <ActionCard icon={<CreditCard />} label="Manage Payment Methods" />
            </div>

            {/* Offer Section */}
            <div className="bg-white rounded-lg shadow p-4 mx-4 mt-6 border-l-4 border-blue-600">
                <div className="text-sm text-blue-700 font-semibold mb-2">Your Recommended Offer</div>
                <div className="text-xl font-bold mb-1">The Freedom to Upgrade. Anytime.</div>
                <p className="text-sm text-gray-700 mb-3">
                    Upgrade your Unlimited plan to Unlimited Plus for just $10 more per month to enjoy the
                    freedom of Anytime Upgrade and <strong>FREE</strong> International roaming in 180+ countries.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium w-full">
                    Upgrade Now
                </button>
            </div>

            {/* Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center h-16 z-10">
                <NavIcon label="Home" active />
                <NavIcon label="Billing" />
                <NavIcon label="Services" />
                <NavIcon label="Upgrade" />
                <NavIcon label="Support" />
            </div>
        </div>
    );
}

// Individual Action Card
const ActionCard = ({
                        icon,
                        label,
                        onClick,
                    }: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}) => (
    <div
        onClick={onClick}
        className="bg-white rounded-lg shadow flex flex-col items-center justify-center p-4 text-center text-sm font-medium text-blue-700 cursor-pointer hover:bg-gray-100 transition"
    >
        <div className="mb-2">{icon}</div>
        {label}
    </div>
);

// Bottom Nav Icon
const NavIcon = ({ label, active = false }: { label: string; active?: boolean }) => (
    <div className="flex flex-col items-center text-xs font-medium text-gray-700">
        <div className={`w-6 h-6 mb-1 ${active ? 'text-blue-600' : 'text-gray-500'}`}>●</div>
        <span className={active ? 'text-blue-600' : ''}>{label}</span>
    </div>
);
