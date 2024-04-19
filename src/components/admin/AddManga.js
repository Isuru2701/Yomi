import React from "react";

export default function AddManga() {
    /* repurpose this as edit manga info by filling in the fields when editing */
    return (
        <div className="flex flex-col w-full h-full justify-center items-center bg-background pt-10">
            
            
            <h1 className="text-6xl text-warm">Manga Info</h1>
            <br />

            <form className="flex flex-col space-y-5 w-2/3 ">

                <input
                    type="text"
                    className="px-10 py-6 border border-gray-600 bg-background rounded-md text-gray-100 focus:outline-none focus:border-warm"
                    placeholder="Title"
                    required={true}

                />
                <input
                    type="text"
                    className="px-10 py-6 border border-gray-600 bg-background rounded-md text-gray-100 focus:outline-none focus:border-warm"
                    placeholder="Author"
                    required={true}

                />
                {/*TODO: query the db for demographic and genres, and suggest it as a dropdown */}
                <input
                    type="text"
                    className="px-10 py-6 border border-gray-600 bg-background rounded-md text-gray-100 focus:outline-none focus:border-warm"
                    placeholder="Demographic"
                    required={true}
                />
                <input
                    type="text"
                    className="px-10 py-6 border border-gray-600 bg-background rounded-md text-gray-100 focus:outline-none focus:border-warm"
                    placeholder="Genres"
                    required={true}

                />

                <textarea
                    type="text"
                    className="px-10 py-6 border border-gray-600 bg-background rounded-md text-gray-100 focus:outline-none focus:border-warm"
                    placeholder="Synposis"
                    required={true}

                />

                <input
                    type="submit"
                    className="px-4 py-5 bg-warm text-white rounded-md mt-4 cursor-pointer"
                    value="Submit"
                />

            </form>
            <br />
            <br />
            <br />

        </div>
    );
}

