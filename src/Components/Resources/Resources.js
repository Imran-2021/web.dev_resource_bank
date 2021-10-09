import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import "./Resources.css"
const Resources = () => {
    const [data,setData]=useState(FakeData)
    // console.log(data);
    return (
        <div className="resource">
            <div className="resource-in">
            <section class="course">
        <h1>What kind of Resource you need ?  - </h1>
        <p class="rowp">Here you find all you need to learn web development for free. <br/> you can also be a part of contributors by giving your favorite resoruces . thank you . </p>

        <div class="row">
            {
                data.map((x,y)=><div class="course-col" key={y}>
                    <Link  className="text-link" to="/resources"><div>
                    <h3>{x.name}</h3>
                    <p>{x.description}</p>
                    </div></Link>
                </div>)
            }
            {/* <div class="course-col">
                <h3>intermediate</h3>
                <p >Lorem ipsum dolor sit amet consectetur</p>

            </div>
            <div class="course-col">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit g elit. Deleniti</p>

            </div>
            <div class="course-col">
                <h3>Post-graduations</h3>
                <p>Lorem ipsum dolor situm rerum repellendus </p>

            </div>
            <div class="course-col">
                <h3>Post-graduations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>

            </div>
            <div class="course-col">
                <h3>Post-graduations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            </div>
            <div class="course-col">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit g elit. Deleniti perspiciatis suscipit </p>

            </div>
            <div class="course-col">
                <h3>Post-graduations</h3>
                <p>Lorem ipsum dolor situm rerum repellendus ratione est </p>

            </div>
            <div class="course-col">
                <h3>Post-graduations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            </div>
            <div class="course-col">
                <h3>Post-graduations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dp</p>

            </div> */}
        </div>

    </section>
            </div>
        </div>
    );
};

export default Resources;