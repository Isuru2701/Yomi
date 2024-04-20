import React from "react";
import Navigator from "./Navigator";
import Card from "./skeletons/Card";

export default function Collection() {
    return (
        <div className="">
            <header><Navigator /></header>

            <div className="flex justify-center text-6xl ">
                <h1 className="text-midnight-light">My collection</h1>
            </div>

            <div className="w-full p-10 h-screen flex flex-wrap bg-background">
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
                <Card title="Title" author="Author" image="https://via.placeholder.com/150" link='https://google.com' />
            </div>

        </div>
    );
}

