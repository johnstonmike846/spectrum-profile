// app/billing/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaDollarSign, FaCreditCard } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import BottomNav from '@/components/BottomNav';

export default function BillingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 text-black dark:bg-[#151517] dark:text-white flex flex-col pb-24">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4 text-center text-lg font-semibold">
                Billing
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-4">
                {/* Internet Bill */}
                <div className="bg-white rounded shadow p-4 border-t-4 border-blue-500">
                    <p className="text-gray-600 font-medium">Internet</p>
                    <p className="text-3xl font-bold my-1">$50.00</p>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                        <FaDollarSign className="mr-1" />
                        Auto Pay Scheduled <span className="ml-1 font-semibold text-black">Jun 14</span>
                    </div>
                    <button
                        onClick={() => alert('Paying early...')}
                        className="w-full border border-blue-500 text-blue-500 py-2 rounded mt-2 hover:bg-blue-50"
                    >
                        Make Early Payment
                    </button>
                </div>

                {/* Mobile Bill */}
                <div className="bg-white rounded shadow p-4 border-t-4 border-blue-500">
                    <p className="text-gray-600 font-medium">Mobile</p>
                    <p className="text-3xl font-bold my-1">$0.00</p>
                    <p className="text-gray-600 text-sm">No Payment Due</p>
                </div>

                {/* Settings */}
                <div className="bg-white rounded shadow p-4">
                    <p className="font-semibold text-lg mb-3">Settings</p>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <div className="flex items-center">
                            <FaDollarSign className="mr-2 text-gray-500" />
                            <span>Auto Pay</span>
                        </div>
                        <IoMdArrowForward />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <FaCreditCard className="mr-2 text-gray-500" />
                            <span>Payment Methods</span>
                        </div>
                        <IoMdArrowForward />
                    </div>
                </div>

                {/* Statements */}
                <div className="bg-white rounded shadow p-4">
                    <p className="font-semibold text-lg mb-3">Statements</p>

                    <div
                        onClick={() => router.push('/billing/internet-statement')}
                        className="flex justify-between items-center py-2 border-b border-gray-200 cursor-pointer"
                    >
                        <div>
                            <p className="text-sm font-medium">Internet</p>
                            <p className="text-xs text-gray-500">Account Number: 8337100311810704</p>
                        </div>
                        <IoMdArrowForward className="text-gray-400" />
                    </div>

                    <div
                        onClick={() => router.push('/billing/mobile-statement')}
                        className="flex justify-between items-center py-2 cursor-pointer"
                    >
                        <div>
                            <p className="text-sm font-medium">Mobile</p>
                            <p className="text-xs text-gray-500">Account Number: 1053411736</p>
                        </div>
                        <IoMdArrowForward className="text-gray-400" />
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
