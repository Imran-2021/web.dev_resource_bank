import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import "./Resource.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Resource = () => {
    const {idd} = useParams();
    // console.log(idd);
    const [data,setData]=useState([])
    // console.log(data);
    useEffect(()=>{
       let dat=FakeData.filter(x=>x.name==`${idd}`);
       setData(dat[0]);
    },[])
    console.log(data);
    console.log(data?.documentations?.[0].w3);
    return (
        <section className="single-resource">
            <div className="single-resource-in">

            <p>TOPIC - {idd}</p>
           
            <h4>{data.description}</h4>
            <p>How to learn, </p>
            {/* <p className="as">{data.keywords}</p> */}
           <div className="as">
           {
                data?.keywords?.map((x,y)=><div className="ass">
               <div>
                 {x}
                </div>
            </div>)
            }
           </div>
            <p>Documentation Links -</p>
            <div className="document">

           
           {
               data?.documentations?.map((x,y)=><div>
                   <p><FontAwesomeIcon style={{color:"black",fontSize:"15px",color:"blue"}} icon={faArrowRight} /> <a className='ahover' target="_blank" rel="noreferrer" href={x}>link</a></p>
                   
               </div>)
           }
            </div>
            <p>Tutorial links - </p>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cupiditate? Accusamus, ab quasi vero possimus fuga repellat ipsam numquam enim, provident perferendis explicabo! Quaerat quasi nostrum maxime repellendus, quisquam sed?</h4>
            </div>
        </section >
    );
};

export default Resource;