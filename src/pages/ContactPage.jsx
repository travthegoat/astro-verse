import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
    return (
        <>
            <Navbar notHome={true} />

            <div className="flex flex-row xl:mt-40 2xl:mt-0 mb-20">
                <div className="hidden xl:flex w-[50%] h-screen flex-col justify-center xl:pl-20 2xl:pl-44 xl:pb-36">
                    <h1 className="text-[60px] font-bold">Contact Us</h1>
                    <p className="text-2xl font-semibold w-[70%]">
                        Email, call or complete the form to let us know about
                        your porblems
                    </p>
                </div>
                <div className="w-full h-screen flex justify-center items-center lg:mt-44 xl:mt-0 px-4 xl:w-[50%] 2xl:px-32">
                    <div className="w-full bg-[#1A1A1D] min-h-[63%] xl:min-h-[55%] rounded-xl shadow-lg pt-5 px-5">
                        <h1 className="text-white text-4xl font-bold">
                            Get In Touch
                        </h1>

                        <div className="flex flex-col gap-5 mt-8">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-white text-md ml-1">
                                    Name
                                </h2>
                                <div className="flex flex-row gap-2">
                                    <input
                                        type="text"
                                        className="bg-[#1A1A1D] border border-white w-[50%] h-10 rounded-lg px-4 text-white"
                                        placeholder="First Name"
                                    />

                                    <input
                                        type="text"
                                        className="bg-[#1A1A1D] border border-white w-[50%] h-10 rounded-lg px-4 text-white"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h2 className="text-white text-md ml-1">
                                    Email
                                </h2>
                                <input
                                    type="email"
                                    className="bg-[#1A1A1D] border border-white w-full h-10 rounded-lg px-4 text-white"
                                    placeholder="Enter Your Email"
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <h2 className="text-white text-md ml-1">
                                    Email
                                </h2>
                                <textarea className="bg-[#1A1A1D] border border-white w-full h-44 rounded-lg px-4 pt-5 text-white" placeholder="How can we help?"></textarea>
                            </div>

                            <button className="flex justify-center items-center w-full h-10 bg-white rounded-md text-xl font-semibold border-none mb-10">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactPage;
