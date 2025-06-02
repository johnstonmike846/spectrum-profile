'use client';

import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import {
    Settings,
    Tv,
    Heart,
    ThumbsUp,
    Globe,
    Phone,
    LogOut,
    ArrowLeft,
} from 'lucide-react';
import formatPhoneNumberIntl from 'libphonenumber-js';


export default function MorePage() {
    const router = useRouter();
    const {
        email,
        firstName,
        lastName,
        phoneNumber,
        billingPhone,
        address,
        address2,
        city,
        zipcode,
        filePath,
        signOut,
    } = useAppContext();

    const fullName =
        firstName || lastName ? `${firstName} ${lastName}`.trim() : 'Anonymous Bystander';

    const formatted = billingPhone ? formatPhoneNumberIntl(billingPhone) : 'N/A';

    const handleSignOut = () => {
        signOut();
        router.push('/login');
    };

    console.log('formatted', formatted);

    return (
        <div className="min-h-screen bg-white pb-24 text-black">
            {/* Header with back button */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4 px-4 flex items-center justify-between">
                <button onClick={() => router.push('/')} className="text-white">
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-lg font-semibold">More</h1>
                <div className="w-5" />
            </div>

            {/* User Details */}
            {/* User Details */}
            <div className="px-4 py-6 bg-gray-50 rounded shadow mx-4 text-sm whitespace-pre-line leading-relaxed">
                <strong>{`${firstName || ''} ${lastName || ''}`.trim() || 'Anonymous Bystander'}</strong>
                {'\n'}
                {email || 'N/A'}
                {'\n'}
                {billingPhone || 'N/A'}
                {'\n'}
                {[
                    address,
                    address2,
                    city,
                    zipcode
                ]
                    .filter(Boolean)
                    .join(', ') || 'N/A'}
            </div>


            {/* Menu Items */}
            <div className="space-y-4 px-4">
                <MenuItem icon={<Settings size={20} />} label="Settings" />
                <MenuItem icon={<Tv size={20} />} label="Watch TV" />
                <MenuItem icon={<Heart size={20} />} label="Customer Commitment" />
                <MenuItem icon={<ThumbsUp size={20} />} label="Leave Feedback" />
                <MenuItem icon={<Globe size={20} />} label="Español" />
                <MenuItem icon={<Phone size={20} />} label="Contact Us" />
                <MenuItem icon={<LogOut size={20} />} label="Sign Out" onClick={handleSignOut} />
            </div>

            {/* Promo Section */}
            <div className="mx-4 mt-6 border rounded-lg p-4 flex items-center space-x-4 shadow-sm">
                <img
                    src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=80&h=80&fit=crop"
                    alt="Spectrum Deal"
                    className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                    <p className="font-semibold">Upgrade Your Plan Anytime</p>
                    <p className="text-sm text-gray-600">
                        Get amazing value and features by upgrading your current Spectrum plan.
                    </p>
                    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded text-sm">
                        Explore Plans
                    </button>
                </div>
            </div>
        </div>
    );
}

const MenuItem = ({
                      icon,
                      label,
                      onClick,
                  }: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}) => (
    <div
        className="flex items-center space-x-3 py-2 border-b border-gray-200 cursor-pointer"
        onClick={onClick}
    >
        <div className="text-gray-700">{icon}</div>
        <span className="text-sm font-medium">{label}</span>
    </div>
);
