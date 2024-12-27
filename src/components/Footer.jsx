import React from "react";

const Footer = () => {
    return (
        <footer class="bg-[#1A1A1D] bottom-0 left-0 right-0">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a class="flex items-center mb-4 sm:mb-0 gap-3">
                        <img src="/logo.png" class="w-16" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Astro Verse
                        </span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="/" class="hover:underline me-4 md:me-6">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/shop" class="hover:underline me-4 md:me-6">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="" class="hover:underline">
                        Trev
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
