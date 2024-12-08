import React from "react";
import Navbar from "../components/Navbar";

const ItemPage = () => {
    return(
        <div className="max-w-full h-screen">

            <Navbar notHome={true} />

            <div className="w-full h-[92%] flex flex-col md:flex-row pt-32">
                <img src="/product.jpg" alt="" className="object-contain w-[80%] md:w-[40%] self-center md:self-start md:ml-20 h-aut"/>
                <h1 className="text-5xl font-bold mt-5">Inosuke</h1>
            </div>

        </div>
    )
}

export default ItemPage;