import React from "react";
import Navigator from "./Navigator";
import { Button } from "react-bootstrap";

export default function Manga(book) {
    return (
        <div>
            <Navigator />
            <div className="max-w-3xl mx-auto p-6 bg-background shadow-md rounded-md shadow-gray-900">
                <div className="flex items-start space-x-6">
                    {/* Book Image */}
                    <div className="flex-shrink-0">
                        <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt={book.title} className="w-40 h-auto rounded-md" />
                    </div>

                    {/* Book Details */}
                    <div className="flex-1">
                        {/* Book Title */}
                        <h1 className="text-5xl text-warm font-bold">Title</h1>

                        {/* Author, Genres, Demographics */}
                        <div className="flex items-start flex-col space-x-2 mt-2 text-white">
                            <p>Author</p>
                            <p><strong>Genres</strong> Genres</p>
                            <p><strong>Demographics</strong> Demographic</p>
                        </div>

                        {/* Description */}
                        <div className="mt-4 text-white">
                            <h2 className="text-lg font-semibold">Synopsis</h2>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.
                            
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

