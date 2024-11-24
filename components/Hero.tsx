import React from 'react';

function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Alippp Marketplace
                        <strong className="font-extrabold text-red-700 sm:block">for all your needs</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        The one stop shop for all your needs. We have everything you need from groceries to electronics.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 transition focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow focus:outline-none focus:ring sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
