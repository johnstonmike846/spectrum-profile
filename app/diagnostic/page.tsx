'use client';

import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

export default function DiagnosticPage() {
    const {
        email,
        firstName,
        lastName,
        address,
        address2,
        city,
        zipcode,
        billingPhone,
        phoneNumber,
        filePath,
        signOut,
    } = useAppContext();

    const router = useRouter();

    const fields = [
        { label: 'First Name', value: firstName },
        { label: 'Last Name', value: lastName },
        { label: 'Email', value: email },
        { label: 'Phone Number', value: phoneNumber },
        { label: 'Billing Phone', value: billingPhone },
        { label: 'Address 1', value: address },
        { label: 'Address 2', value: address2 },
        { label: 'City', value: city },
        { label: 'Zipcode', value: zipcode },
        { label: 'File Path', value: filePath },
    ];

    const handleClear = () => {
        signOut();
        router.push('/login');
    };

    const handleHome = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-xl font-bold mb-4">Diagnostic: App Context Values</h1>

            <div className="bg-gray-50 border rounded-lg p-4 space-y-2 shadow">
                {fields.map(({ label, value }) => (
                    <div key={label} className="text-sm">
                        <strong>{label}:</strong> {value || 'N/A'}
                    </div>
                ))}
            </div>

            <div className="mt-6 flex gap-4">
                <button
                    onClick={handleClear}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Clear All & Logout
                </button>
                <button
                    onClick={handleHome}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}
