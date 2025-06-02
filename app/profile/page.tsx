'use client';

import { useAppContext } from '@/context/AppContext';

export default function ProfilePage() {
    const {
        email, setEmail,
        firstName, setFirstName,
        lastName, setLastName,
        address, setAddress,
        phoneNumber, setPhoneNumber,
        isLoggedIn, setIsLoggedIn
    } = useAppContext();

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Profile</h1>

            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="block mb-2 border p-2 w-full" />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="block mb-2 border p-2 w-full" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block mb-2 border p-2 w-full" />
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone" className="block mb-2 border p-2 w-full" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="block mb-2 border p-2 w-full" />

            <button
                onClick={() => setIsLoggedIn(true)}
                className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            >
                Mark as Logged In
            </button>
        </div>
    );
}
