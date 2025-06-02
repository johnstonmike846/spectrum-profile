'use client';

import { useRouter } from 'next/navigation';
import {useAppContext} from "@/context/AppContext";

export default function InternetStatementPage() {
    const router = useRouter();
    const { filePath } = useAppContext();

    const handleDownload = () => {
        if (!filePath) {
            alert('No file path provided.');
            return;
        }

        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop() || 'statement.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-100 pb-24 text-black">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-4 px-4 flex justify-between items-center">
                <button onClick={() => router.back()} className="text-2xl font-semibold">&larr;</button>
                <h1 className="text-lg font-semibold">Billing Statements</h1>
                <div className="w-6" /> {/* Spacer for symmetry */}
            </div>

            <div className="p-4 space-y-6">
                {/* Internet Info */}
                <div>
                    <p className="text-xl font-bold">Internet</p>
                    <p className="text-sm text-gray-500">Account Number: 8337100311810704</p>
                </div>

                {/* Current Statement */}
                <button
                    onClick={handleDownload}
                    className="bg-white rounded shadow p-4 flex justify-between items-center w-full text-left hover:bg-gray-50"
                >
                    <div>
                        <p className="text-sm font-medium">Statement</p>
                        <p className="text-sm">May 27, 2025</p>
                        <p className="text-green-600 text-sm mt-1">Auto Pay: Jun 14</p>
                    </div>
                    <p className="text-lg font-bold">$50.00</p>
                </button>


                {/* Billing History */}
                <div>
                    <p className="text-lg font-semibold mb-2">Billing History</p>
                    <p className="uppercase text-sm font-semibold text-gray-700 mb-2">2690 Curry Ford Rd Apt 12</p>

                    <div className="bg-white rounded shadow divide-y">
                        <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                            <p>
                                <span className="text-sm font-medium block">Statement</span>
                                <span className="text-sm">April 27, 2025</span>
                            </p>
                            <span className="text-xl text-gray-400">&gt;</span>
                        </div>
                        <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                            <p>
                                <span className="text-sm font-medium block">Statement</span>
                                <span className="text-sm">March 27, 2025</span>
                            </p>
                            <span className="text-xl text-gray-400">&gt;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
