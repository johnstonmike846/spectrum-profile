'use client';

import { useRouter } from 'next/navigation';

export default function MobileStatementPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 pb-24 text-black">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4 px-4 flex justify-between items-center">
                <button onClick={() => router.back()} className="text-2xl font-semibold">&larr;</button>
                <h1 className="text-lg font-semibold">Billing Statements</h1>
                <div className="w-6" /> {/* Spacer */}
            </div>

            <div className="p-4 space-y-6">
                <div>
                    <p className="text-xl font-bold">Mobile</p>
                    <p className="text-sm text-gray-500">Account Number: 1053411736</p>
                </div>

                <div className="text-center text-gray-500 mt-10">
                    <p className="text-lg font-medium">No available statements at this time.</p>
                </div>
            </div>
        </div>
    );
}
