/**
 * @author Khant Thit Oo
 * @created 12/30/2024
 */

import { useEffect, useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { fetchData } from "../../../api";
import Cookies from "js-cookie";

const LoginPage = () => {
    const [email, setEmail] = useState(""); // Email Input
    const [password, setPassword] = useState(""); // Password Input
    const [error, setError] = useState(
        "Our figures are missing you (your money)*"
    ); // Subtitle but also serve as error message
    const navigate = useNavigate(); // to Navigate

    useEffect(() => {
        if (Cookies.get("uid") !== undefined) {
            navigate("/shop", { replace: true });
        }
    }, []);

    const login = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please Fill Everything");
            return;
        }

        try {
            const result = await fetchData(`/users/search?email=${email}`); // getting user by email
            if (password === result[0].pwd) {
                // Checking credentials
                setError("Login Success!");

                Cookies.set("uid", result[0].user_id, { expires: 7 }); // set cookies
                navigate('/shop', { replace: true }); // go to shop page
            } else {
                setError("Email Or Password is Wrong!");
            }
        } catch (err) {
          
            setError(err.response.data.message); // err msg
        }
    };

    return (
        <div className="h-screen flex flex-row md:flex-col lg:flex-row overflow-hidden bg-[#070707]">
            {/* Background Image */}
            <div className="hidden md:block w-full lg:block lg:w-[60%] bg-cover h-[40%] lg:h-screen bg-[url(/bg-tablet.jpg)]">
                <div className="w-full h-full bg-black bg-opacity-60"></div>
            </div>
            {/* End Background Image */}

            {/* Form Container */}
            <div className="w-full h-screen overflow-auto md:h-[60%] 2xl:h-[70%] lg:w-[40%] lg:h-screen bg-[#1A1A1D] pl-3 flex flex-col justify-center md:justify-start md:rounded-tl-3xl md:rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-br-3xl lg:-translate-x-14 2xl:rounded-br-none 2xl:rounded-bl-none lg:mt-10 2xl:self-end">
                <img src="/logo.png" alt="" className="w-32 md:mt-20 lg:mt-2" />
                <h1 className="text-3xl text-white ml-6 font-semibold">
                    Login to your Account
                </h1>
                <h2 className="text-medium text-gray-400 ml-6 mt-1">{error}</h2>

                <form className="mt-10 lg:mt-6 px-6 flex flex-col gap-5 lg:gap-3 2xl:gap-5">
                    {/* Email Input */}
                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-xl text-white font-medium">
                            Email<span className="text-red-700">*</span>
                        </h1>
                        <input
                            type="email"
                            className="w-full h-12 bg-transparent border px-3 rounded-md text-white text-md"
                            placeholder="Enter Your Email"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-xl text-white font-medium">
                            Password<span className="text-red-700">*</span>
                        </h1>
                        <input
                            type="password"
                            className="w-full h-12 bg-transparent border px-3 rounded-md text-white text-md"
                            placeholder="Enter Your Password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Btn */}
                    <div className="flex flex-row items-center mt-5 gap-5">
                        <button
                            type="submit"
                            className="w-48 h-12 bg-white rounded-xl text-xl font-semibold hover:bg-gray-300 duration-300"
                            onClick={login}
                        >
                            Sign In
                        </button>
                        <Link
                            to="/auth/register"
                            className="text-white hover:underline"
                            replace={true}
                        >
                            New here? Register!
                        </Link>
                    </div>
                </form>
            </div>
            {/* End Form Container */}
        </div>
    );
};

export default LoginPage;
