const Anime = ({ name, img, onclick, selected }) => {
    return (
        <button onClick={() => onclick()} className="flex w-full h-10 hover:bg-gray-100 justify-between items-center rounded-lg duration-300 cursor-pointer">
            <div className="flex items-center gap-1">
                <img
                    src={img}
                    alt=""
                    className="object-contain w-[15%]"
                />
                <h1 className="mb-1 font-semibold">{name}</h1>
            </div>
            <div className="text-[#49c2d1] text-xl font-semibold justify-self-end mr-1">
                { name === selected && <ion-icon name="checkmark-outline"></ion-icon> }
            </div>
        </button>
    );
};

export default Anime;