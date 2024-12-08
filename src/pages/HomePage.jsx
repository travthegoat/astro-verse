import React from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";

const HomePage = () => {
    return (
        <>
            <div className="w-full h-screen bg-cover bg-[url(/bg-mobile.png)] md:bg-[url(/bg-tablet.jpg)] lg:bg-[url(/bg.jpg)]">
                <div className="w-full h-screen bg-black bg-opacity-60">
                    <Navbar />

                    <div className="w-full h-[92%] flex flex-col items-center justify-center">
                        <h1 className="text-white text-[50px] md:text-[70px] font-bold">
                            ASTRO VERSE
                        </h1>
                        <h2 className="text-white text-lg mb-2 -translate-y-2 md:-translate-y-4">
                            The Ultimate Figure Shop
                        </h2>
                        <div className="flex flex-row gap-5">
                            <button className="text-white text-2xl border-white border px-8 pt-3 pb-4 rounded-full hover:text-black hover:bg-white duration-300">
                                Shop
                            </button>
                            <button className="text-black text-2xl bg-white px-6 pt-3 pb-4 rounded-full border border-white hover:text-white hover:bg-transparent duration-300">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex flex-col items-center bg-[#f8f8f8]">
                <h1 className="text-5xl font-semibold text-center pt-10">
                    New Arrivals
                </h1>
                <h2 className="text-xl text-center text-gray-500 mt-4">
                    Fresh Finds for Every Style – Shop the Latest Trends Today!
                </h2>

                <div className="w-full 2xl:w-[70%] flex flex-wrap justify-center items-start pt-20 gap-4 :gap-10">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>

                <button className="w-48 bg-[#1A1A1D] hover:bg-black duration-300 text-white py-3 rounded-full text-xl mb-20">
                    See All
                </button>
            </div>

            <footer class="bg-[#1A1A1D]">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a
                            class="flex items-center mb-4 sm:mb-0 gap-3"
                        >
                            <img
                                src="/logo.png"
                                class="w-16"
                                alt="Flowbite Logo"
                            />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Astro Verse
                            </span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a
                                    href="#"
                                    class="hover:underline me-4 md:me-6"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="hover:underline me-4 md:me-6"
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="hover:underline"
                                >
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
        </>
    );
};

export default HomePage;
