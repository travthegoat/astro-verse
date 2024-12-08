import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = ({ notHome }) => {
    const [toggle, setToggle] = useState(true);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        
        window.addEventListener('scroll', () => setScroll(window.scrollY));
        console.log(scroll);

        return () => {
            window.removeEventListener('scroll', setScroll(window.scrollY));
        }

    }, [window.scrollY]);

    return (
        <nav
            className={
                scroll > 0 || notHome
                    ? "bg-[#1A1A1D] w-full h-[8%] md:h-20 duration-500 fixed top-0 left-0 z-50 shadow-md"
                    : "bg-transparent w-full h-[8%] md:h-20 duration-500"
            }
        >
            <div className="w-full h-full bg-transparent flex flex-row pl-2 pr-4 justify-between items-center md:pl-10 md:pr-14">
                <div className="flex flex-row items-center gap-20">
                    <img className="w-20" src="/logo.png" alt="" />

                    <ul
                        className={`hidden md:flex flex-row items-center gap-10`}
                    >
                        <li>
                            <a
                                href="#"
                                className={`text-xl text-gray-300 hover:text-white`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-xl text-gray-300 hover:text-white`}
                            >
                                Shop
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-xl text-gray-300 hover:text-white`}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex flex-row items-center gap-10">
                    <button className="w-28 h-10 bg-white text-black font-semibold text-lg rounded-lg hover:bg-red-900 duration-300">
                        Sign In
                    </button>
                    <ShoppingCartOutlinedIcon
                        style={{ color: "white", fontSize: 40 }}
                    />
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? (
                        <CloseIcon
                            color="white"
                            style={{ color: "white", fontSize: 50 }}
                        />
                    ) : (
                        <MenuIcon
                            color="white"
                            style={{ color: "white", fontSize: 50 }}
                        />
                    )}
                </button>
            </div>

            <div
                className={`${
                    toggle ? "" : "-translate-x-[700px]"
                } md:hidden duration-500 bg-[#1A1A1D]`}
            >
                <a
                    href="#"
                    className="block px-4 py-2 text-white "
                >
                    Home
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-white "
                >
                    Shop
                </a>
                <a
                    href="#"
                    className="block px-4 py-2 text-white "
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;