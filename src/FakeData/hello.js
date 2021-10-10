import React from 'react';
import Fakedeta from "../FakeData/FakeData.json"

const Hello = () => {
    console.log(Fakedeta);
    // how to use fakeData.json file . 
    return (
        <div>
            <p>{Fakedeta.length}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam tempore voluptate libero maiores officiis minus placeat ipsa dignissimos temporibus voluptatem rerum, deserunt excepturi nam sapiente animi reprehenderit fugiat! Optio, consequatur.</p>
        </div>
    );
};

export default Hello;