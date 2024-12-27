import { useState } from "react";
import Navbar from "../components/Navbar";
import Anime from "../components/Anime";
import Item from '../components/Item';
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

    const [query, setQuery] = useState('');
    const filteredAnimes = animes.filter(anime => {
        return anime.name.toLowerCase().includes(query.toLowerCase())
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
                    <div className="w-[20%] h-full p-10">
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
                                        className="bg-gray-200 border-none w-full h-full px-2"
                                        onChange={e => setQuery(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mx-2 mb-44 mt-3">
                                    {filteredAnimes.map((anime) => (
                                        <Anime
                                            name={anime.name}
                                            img={anime.img}
                                            onclick={() => {
                                                setAnimeSelected(anime.name)
                                            }}
                                            selected={animeSelected}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] flex flex-col pt-10">
                        <select className="w-44 min-h-10 bg-gray-200 rounded-md text-lg  font-semibold pl-2">
                            <option value="All">Latest</option>
                            <option value="All">Oldest</option>
                        </select>

                        <div className="w-full mt-6 flex flex-wrap gap-x-5 overflow-auto">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
