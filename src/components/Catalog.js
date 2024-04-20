import React from "react";

import Navigator from "./Navigator";
import Card from "./skeletons/Card";
import SearchBox from "./skeletons/SearchBox";
export default function Catalog() {
    return (
        <div className="">
            <header><Navigator /></header>

            <div className="w-full bg-background flex justify-center"><SearchBox /></div>

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
