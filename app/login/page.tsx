'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext'; // Adjust if needed
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const { setEmail, setIsLoggedIn } = useAppContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            setEmail(username);
            setIsLoggedIn(true);
            router.push('/');
        } else {
            alert('Enter credentials');
        }
    };


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-2">Sign In to Get Started</h1>
            <p className="text-sm mb-6">
                <span className="text-blue-600 cursor-pointer underline">Create a Username</span>
            </p>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
                {/* Username */}
                <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPwd ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPwd(!showPwd)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                            {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
                >
                    Sign In
                </button>

                {/* Forgot */}
                <p className="text-sm text-center mt-2 text-blue-600 underline cursor-pointer">
                    Forgot Username or Password?
                </p>
            </form>

            {/* Footer */}
            <div className="text-xs text-center mt-10 text-gray-500 space-y-1">
                <p>Your Privacy Rights</p>
                <p>California Consumer Privacy Rights</p>
            </div>
        </div>
    );
}
