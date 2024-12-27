import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ItemPage = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="max-w-full h-auto">
            <Navbar notHome={true} />

            <div className="w-full h-[92%] flex flex-col md:flex-row pt-32 px-5 mb-96">
                <img
                    src="/product.jpg"
                    alt=""
                    className="object-contain w-[80%] md:w-[40%] lg:w-[30%] self-center md:self-start md:ml-10 lg:ml-20 md:mr-10 lg:mr-32 h-auto"
                />

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mt-5">
                        Demon Slayer: Inosuke Hashibira
                    </h1>

                    <div className="hidden flex-col mt-10 md:flex mb-10">
                        <h1 className="text-2xl font-semibold mb-5">Product Details</h1>

                        <ul>
                            <li><h2 className="text-xl font-semibold">Rarity: <span className="ml-2">Pretty Rare</span></h2></li>
                            <li><h2 className="text-xl font-semibold">Quality: <span className="ml-2">G.O.A.T</span></h2></li>
                            <li><h2 className="text-xl font-semibold">Released Date: <span className="ml-2">02-11-2008</span></h2></li>
                        </ul>
                    </div>

                    <div className="w-full h-auto border border-black rounded-lg mt-5 pt-6 px-5">
                        <h1 className="text-3xl font-bold ">
                            $9.99{" "}
                            <span className="text-sm font-medium text-gray-500">
                                + $3.99 shipping
                            </span>
                        </h1>
                        <h2 className="text-md text-gray-500 font-medium mt-5">
                            500 Instock
                        </h2>

                        <div className="flex flex-row w-full gap-4 mb-10">
                            <input
                                type="number"
                                className="w-[30%] h-12 border border-black mt-2 text-center text-xl rounded-md"
                                placeholder="1"
                                onChange={(num) => setQuantity(num)}
                            />

                            <button className="w-[65%] h-12 bg-[#1A1A1D] mt-2 text-white text-xl rounded-md hover:bg-black duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col mt-10 md:hidden">
                        <h1 className="text-2xl font-semibold mb-5">Product Details</h1>

                        <ul>
                            <li><h2 className="text-xl font-semibold">Rarity: <span className="ml-2">Pretty Rare</span></h2></li>
                            <li><h2 className="text-xl font-semibold">Quality: <span className="ml-2">G.O.A.T</span></h2></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ItemPage;