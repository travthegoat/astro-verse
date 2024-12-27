import React from "react";
import { useNavigate } from "react-router-dom";

const Item = () => {
    const navigate = useNavigate();

    return (
        <button className="w-[350px] h-[250px] mb-10 shadow-md flex flex-row px-2 rounded-lg bg-white hover:shadow-xl duration-300" onClick={() => navigate('/items')}>
            <img
                src="/product.jpg"
                alt=""
                className="w-[40%] h-auto object-contain self-center"
            />

            <div className="w-[60%] h-full flex flex-col items-start pl-5 pt-5">
                <h1
                    className="text-start text-lg font-bold"
                    style={{ fontFamily: "sans-serif" }}
                >
                    Demon Slayer: Inosuke Hashibira
                </h1>
                <h2 className="text-gray-500 mt-2">Pretty Rare</h2>
                <h2 className="text-gray-500">G.O.A.T</h2>

                <h1 className="text-2xl font-bold mt-2">$9.99</h1>

                <div className="w-[50%] h-6 bg-black flex justify-center items-center rounded-full pb-[3px] mt-2">
                    <h2 className="text-white">Instock</h2>
                </div>
            </div>
        </button>
    );
};

export default Item;
