import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="h-screen flex flex-row md:flex-col lg:flex-row overflow-hidden bg-[#070707]">
            <div className="hidden md:block w-full lg:block lg:w-[60%] bg-cover h-[40%] lg:h-screen bg-[url(/bg-tablet.jpg)]">
                <div className="w-full h-full bg-black bg-opacity-60"></div>
            </div>
            <div className="w-full h-screen md:h-[60%] 2xl:h-[80%] lg:w-[40%] lg:h-screen bg-[#1A1A1D] pl-3 flex flex-col justify-center md:justify-start lg:justify-center 2xl:justify-start md:rounded-tl-3xl md:rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-br-3xl lg:-translate-x-14 2xl:rounded-br-none 2xl:rounded-bl-none lg:mt-10 2xl:self-end">
                <img src="/logo.png" alt="" className="w-32 md:mt-20 lg:mt-2 lg:hidden 2xl:block" />
                <h1 className="text-3xl text-white ml-6 font-semibold ">
                    Register to explore
                </h1>
                <h2 className="text-medium text-gray-400 ml-6 mt-1">
                    Our figures are waiting you {"(your money)*"}
                </h2>

                <div className="mt-10 lg:mt-6 px-6 flex flex-col gap-5 lg:gap-3 2xl:gap-5">
                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-xl text-white font-medium">
                            Full Name<span className="text-red-700">*</span>
                        </h1>
                        <input
                            type="email"
                            className="w-full h-12 bg-transparent border px-3 rounded-md text-white text-md"
                            placeholder="Enter Your Email"
                        />
                    </div>

                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-xl text-white font-medium">
                            Email<span className="text-red-700">*</span>
                        </h1>
                        <input
                            type="email"
                            className="w-full h-12 bg-transparent border px-3 rounded-md text-white text-md"
                            placeholder="Enter Your Email"
                        />
                    </div>

                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-xl text-white font-medium">
                            Password<span className="text-red-700">*</span>
                        </h1>
                        <input
                            type="password"
                            className="w-full h-12 bg-transparent border px-3 rounded-md text-white text-md"
                            placeholder="Enter Your Password"
                        />
                    </div>

                    <div className="flex flex-row items-center mt-5 gap-5">
                        <button className="w-48 h-12 bg-white rounded-xl text-xl font-semibold hover:bg-gray-300 duration-300">
                            Register
                        </button>
                        <Link
                            to="/auth/login"
                            className="text-white hover:underline"
                            replace={true}
                        >
                            Already A User? Login!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
