import { useState } from "react";
import Navbar from "../components/Navbar";
import Anime from "../components/Anime";
import Item from "../components/Item";
import { listItemSecondaryActionClasses } from "@mui/material";

const ShopPage = () => {
    const [animeSelected, setAnimeSelected] = useState("");
    const [animes, setAnimes] = useState([
        { name: "Uzumaki Naruto", img: "/animes/naruto.png" },
        { name: "Jujutsu Kaisen", img: "/animes/jjk.png" },
        { name: "Bleach", img: "/animes/bleach.png" },
        { name: "Demon Slayer", img: "/animes/demonslayer.png" },
        { name: "One Piece", img: "/animes/onePiece.png" },
    ]);

    const [items, setItems] = useState([
        {
            name: "Yuji Itadori",
            rarity: "Pretty Rare",
            quality: "G.O.A.T",
            price: 99.99,
        },
        {
            name: "Megumi Fushiguro",
            rarity: "Epic",
            quality: "Elite",
            price: 89.99,
        },
        {
            name: "Nobara Kugisaki",
            rarity: "Legendary",
            quality: "Iconic",
            price: 109.99,
        },
        {
            name: "Gojo Satoru",
            rarity: "Ultra Rare",
            quality: "Beyond G.O.A.T",
            price: 199.99,
        },
        {
            name: "Sukuna",
            rarity: "Mythical",
            quality: "Devastating",
            price: 149.99,
        },
        {
            name: "Naruto Uzumaki",
            rarity: "Epic",
            quality: "Hokage-Level",
            price: 129.99,
        },
        {
            name: "Sasuke Uchiha",
            rarity: "Pretty Rare",
            quality: "Elite",
            price: 119.99,
        },
        {
            name: "Sakura Haruno",
            rarity: "Rare",
            quality: "Dependable",
            price: 79.99,
        },
        {
            name: "Kakashi Hatake",
            rarity: "Ultra Rare",
            quality: "Legendary",
            price: 139.99,
        },
        {
            name: "Itachi Uchiha",
            rarity: "Mythical",
            quality: "Iconic",
            price: 189.99,
        },
    ]);
    

    const [animeQuery, setAnimeQuery] = useState("");
    const filteredAnimes = animes.filter((anime) => {
        return anime.name.toLowerCase().includes(animeQuery.toLowerCase());
    });

    const [itemQuery, setItemQuery] = useState("");
    const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(itemQuery.toLowerCase());
    })



    return (
        <>
            <Navbar notHome={true} />

            <div className="flex flex-col w-full h-screen overflow-hidden bg-[#f9f9f9]">
                <div className="pt-28 pl-10 h-[15%]">
                    <h1 className="text-2xl font-bold">
                        64 results for Naruto Uzumaki
                    </h1>
                </div>

                <div className="flex flex-row w-full h-[80%]">
                    <div className="md:w-[30%] 2xl:w-[20%] h-full p-10">
                        <div className="bg-gray-200 h-full rounded-xl px-1 pt-4 flex flex-col">
                            <div className="flex justify-between px-2">
                                <h2 className="font-semibold text-lg">
                                    Filter
                                </h2>
                                <h2 className="text-[#49c2d1] text-md font-semibold">
                                    Advanced
                                </h2>
                            </div>

                            <div className="flex flex-col pt-3 mt-5 bg-white rounded-xl">
                                <h1 className="text-md font-medium ml-4">
                                    Anime
                                </h1>

                                <div className="bg-gray-200 max-w-full h-10 mx-4 mt-2 rounded-xl flex items-center px-2">
                                    <div className="text-xl text-gray-500 mt-1">
                                        <ion-icon name="search-outline"></ion-icon>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search Anime ..."
                                        className="bg-gray-200 border-none w-full h-full px-2 outline-none"
                                        onChange={(e) =>
                                            setAnimeQuery(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex flex-col mx-2 mb-2 mt-3">
                                    {filteredAnimes.map((anime) => (
                                        <Anime
                                            name={anime.name}
                                            img={anime.img}
                                            onclick={() => {
                                                if (animeSelected === anime.name) {
                                                    setAnimeSelected('');
                                                } else {
                                                    setAnimeSelected(anime.name);
                                                }
                                            }}
                                            selected={animeSelected}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:w-[80%] md:w-[70%] flex flex-col pt-10">
                        <div className="flex items-center justify-between pl-6 md:pr-[105px] 2xl:pr-5">
                            <select className="w-44 min-h-10 mt-1 bg-gray-200 rounded-md text-lg font-semibold pl-2 outline-none">
                                <option value="All">Latest</option>
                                <option value="All">Oldest</option>
                            </select>

                            <div className="bg-gray-200 max-w-full h-10 mx-4 mt-2 rounded-xl flex items-center px-2">
                                <input
                                    type="text"
                                    placeholder="Search Figures ..."
                                    className="bg-gray-200 border-none w-full h-full px-2 outline-none"
                                    onChange={(e) => setItemQuery(e.target.value)}
                                />
                                <div className="text-xl text-gray-500 mt-1">
                                    <ion-icon name="search-outline"></ion-icon>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-6 flex flex-wrap 2xl:gap-x-5 md:gap-x-12 pl-6 2xl:justify-start overflow-auto">
                            {filteredItems.map((item) => (
                                <Item
                                    name={item.name}
                                    rarity={item.rarity}
                                    quality={item.quality}
                                    price={item.price}
                                /> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
