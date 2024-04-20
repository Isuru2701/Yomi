import React, { useEffect, useState } from "react";
import Navigator from "./Navigator";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Manga() {

    //get book id from path variable
    const { id } = useParams();
    const [mangaData, setMangaData] = useState({});
    const fetchInfo = async () => {
        try {
            const response = await fetch(`http://localhost:5000/manga/id/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.error('Failed to fetch manga');
                return;
            }

            const data = await response.json();
            setMangaData(data);
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }

        
    }

    useEffect(() => {
        fetchInfo();
    }
    , []);

    return (
        <div>
            <Navigator />
            <div className="max-w-3xl mx-auto p-6 bg-background shadow-md rounded-md shadow-gray-900">
                <div className="flex items-start space-x-6">
                    {/* Book Image */}
                    <div className="flex-shrink-0">
                        <img src={mangaData.image} className="w-40 h-auto rounded-md" />
                    </div>

                    {/* Book Details */}
                    <div className="flex-1">
                        {/* Book Title */}
                        <h1 className="text-5xl text-warm font-bold tracking-wider">{mangaData.title}</h1>

                        {/* Author, Genres, Demographics */}
                        <div className="flex items-start flex-col space-x-2 mt-2 text-white">
                            <p className="text-4xl text-gray-400">{mangaData.author}</p>
                            <br/>
                            <p><strong className="text-highlight">Genres</strong> {mangaData.genre}</p>
                            <br/>
                            <p><strong className="text-highlight">Demographics</strong> {mangaData.demographic}</p>
                        </div>

                        {/* Description */}
                        <div className="mt-4 text-white">
                            <h2 className="text-lg font-semibold text-highlight">Synopsis</h2>
                            <p className="mt-2">{mangaData.description}

                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex w-full justify-center mt-2 space-x-2">

                <Button className='bg-background border-secondary'>Add to collection</Button>
                <a href='/catalog'><Button className='bg-background border-none'>search for more</Button></a>
            </div>
        </div>
    );
}

