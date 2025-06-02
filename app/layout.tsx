// app/layout.tsx
import './globals.css';
import { AppProvider } from '@/context/AppContext'; // Update path if needed
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Your App',
    description: 'Your Description',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <AppProvider>
            {children}
        </AppProvider>
        </body>
        </html>
    );
}
