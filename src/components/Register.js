import React from "react";

export default function Register() {
    return (
        <div className="flex w-full h-screen">
            <img src="/register_cover.jpg" className="object-cover h-full w-full" alt="image background" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>

            <div className="absolute inset-y-0 right-0 w-1/3 bg-background bg-opacity-100 flex flex-col items-center justify-center  rounded-l-lg mt-4 mb-4 mr-8">
                <h1 className="text-7xl text-midnight">Register</h1>

                <br />
                <br />
                <form className="flex flex-col space-y-5 w-2/3 ">
                    <input
                        type="text"
                        className="px-10 py-6 border border-gray-600 bg-background rounded-md text-gray-100 focus:outline-none focus:border-midnight-dark"
                        placeholder="Email"
                        required={true}

                    />
                    <br/>

                    <input
                        type="password"
                        className="px-10 py-5 border border-gray-600 rounded-md bg-background text-gray-100 focus:outline-none focus:border-midnight-dark"
                        placeholder="Password"
                    />

<input
                        type="password"
                        className="px-10 py-5 border border-gray-600 rounded-md bg-background text-gray-100 focus:outline-none focus:border-midnight-dark"
                        placeholder="Confirm Password"
                        required={true}
                    />

                    <br />
                    <input
                        type="submit"
                        className="px-4 py-5 bg-midnight-dark text-white rounded-md mt-4 cursor-pointer"
                        value="Register"
                    />
                </form>
            
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-gray-100 text-sm">
                    © Artwork by <a href="https://www.pixiv.net/en/artworks/113600258">void_0</a>
                </div>



        </div>
    );
}

