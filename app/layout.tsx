'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { CartContext } from '@/context/CartContext';
import { useState } from 'react';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [cart, setCart] = useState([]);

    return (
        <ClerkProvider>
            <CartContext.Provider value={{ cart, setCart }}>
                <html lang="en">
                    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                        <Header />
                        {children}
                        <Footer />
                    </body>
                </html>
            </CartContext.Provider>
        </ClerkProvider>
    );
}
