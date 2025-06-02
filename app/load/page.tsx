'use client';

import {useAppContext} from '@/context/AppContext';
import {useRouter} from 'next/navigation';

export default function LoadFormPage() {
    const {
        firstName, setFirstName,
        lastName, setLastName,
        address, setAddress,
        address2, setAddress2,
        city, setCity,
        zipcode, setZipcode,
        email, setEmail,
        billingPhone, setBillingPhone,
        filePath, setFilePath
    } = useAppContext();

    const router = useRouter();

    const fields = [
        {label: 'First Name', value: firstName, setter: setFirstName},
        {label: 'Last Name', value: lastName, setter: setLastName},
        {label: 'Address 1', value: address, setter: setAddress},
        {label: 'Address 2', value: address2, setter: setAddress2},
        {label: 'City', value: city, setter: setCity},
        {label: 'Zipcode', value: zipcode, setter: setZipcode},
        {label: 'Email Address', value: email, setter: setEmail},
        {label: 'Billing Phone Number', value: billingPhone, setter: setBillingPhone},
    ];

    const handleSave = () => {
        setFilePath(filePath); // Persist file path
        router.push('/');
    };

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-xl font-bold mb-6">Demo: Load User Info & File Path</h1>

            {/* User Info Fields */}
            <div className="space-y-4 mb-8">
                {fields.map((field, index) => (
                    <div key={index}>
                        <label className="block text-sm font-medium mb-1">{field.label}</label>
                        <input
                            type="text"
                            value={field.value}
                            onChange={(e) => field.setter(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>
                ))}
            </div>

            {/* File Path Field */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1">File Download URL (e.g. Dropbox public link)</label>
                <input
                    type="text"
                    value={filePath}
                    onChange={(e) => setFilePath(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Save
                </button>
                <button
                    onClick={handleGoHome}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}
