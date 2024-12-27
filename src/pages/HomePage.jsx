import React from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

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
                            <button onClick={() => navigate('/shop')} className="text-white text-2xl border-white border px-8 pt-3 pb-4 rounded-full hover:text-black hover:bg-white duration-300">
                                Shop
                            </button>
                            <button onClick={() => navigate('/auth/register')} className="text-black text-2xl bg-white px-6 pt-3 pb-4 rounded-full border border-white hover:text-white hover:bg-transparent duration-300">
                                Register
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

                <Link to={'/shop'} className="w-48 bg-[#1A1A1D] hover:bg-black duration-300 py-3 rounded-full mb-20">
                    <p className="text-white text-xl text-center">See All</p>
                </Link>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;
