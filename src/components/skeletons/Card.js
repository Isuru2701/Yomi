import React from "react";

export default function Card(props) {
    return (
        <div className="w-1/5 h-1/5 m-4 border-secondary border-10 rounded">
            <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="font-bold text-midnight">{props.title}</h2>
                <p className="text-sm text-white">{props.author}</p>
                <a className='text-sm text-highlight' href={props.link}>more info</a>

                {/*TODO: props.admin true? or admin true from cookies? render add and delete buttons */}
            </div>

        </div>
    )
}