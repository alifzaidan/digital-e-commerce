'use client';

import { CartContext } from '@/context/CartContext';
import GlobalApi from '@/utils/GlobalApi';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Cart from './Cart';

function Header() {
    const { user } = useUser();
    const [isLogin, setIsLogin] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        setIsLogin(window.location.href.toString().includes('sign-in'));
        setIsLogin(window.location.href.toString().includes('sign-up'));
    });

    useEffect(() => {
        user && getCartItem();
    }, [user]);

    const getCartItem = () => {
        GlobalApi.getUserCartItem(user?.primaryEmailAddress?.emailAddress).then((response) => {
            const result = response.data.data;
            result && result.forEach((item: any) => setCart((cart: any[]) => [...cart, { id: item.documentId, product: item.product }]));
        });
    };

    return (
        !isLogin && (
            <header className="bg-white border-b">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-primary" href="/">
                        <span className="sr-only">Home</span>
                        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Explore
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="flex gap-4">
                                <SignedOut>
                                    <a
                                        className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                                        href="/sign-in"
                                    >
                                        Login
                                    </a>

                                    <a
                                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition sm:block"
                                        href="/sign-up"
                                    >
                                        Register
                                    </a>
                                </SignedOut>
                                <SignedIn>
                                    <div className="flex gap-1 cursor-pointer" onClick={() => setOpenCart(!openCart)}>
                                        <ShoppingCart />
                                        <h2 className="font-medium">({cart?.length})</h2>
                                    </div>
                                    <UserButton afterSwitchSessionUrl="/" />
                                </SignedIn>

                                {openCart && <Cart />}
                            </div>

                            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition md:hidden">
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    );
}

export default Header;
